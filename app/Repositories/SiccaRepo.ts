import MovimentaestoqueRepo from "./MovimentaestoqueRepo";
import ClienteRepo from "./ClienteRepo";
import fornecedorRepo from "./FornecedorRepo"
import infortecnicaSiccaRepo from './InfortecnicaSiccaRepo'
import receitaRepo from './ReceitaRepo'
import propriedadeRepo from './PropriedadeRepo'
import Empresa from "App/Models/Empresa";

import embalagem from 'App/Models/EmbalagensSicca'
import moment from 'moment'

export default class SiccaRepositories {

    static async index(dataInicial, dataFinal, idEmpresa) {

        const movimentaestoque = await MovimentaestoqueRepo.indexByDateSicca(dataInicial, dataFinal, idEmpresa)

        const empresa = await Empresa.query().select('cpfcnpj').where('id_empresa','=', idEmpresa).first()

        let agrotoxicos = []

        const relatorio = await Promise.all(movimentaestoque.map(async (elem) => {
            let data =moment(elem.data).format('YYYY-MM-DD') 
            let tipoMov = "ENTRADA"
            let fornecedor
            let infortecnica
            let receita
            let cliente
            let propriedade
            let razaoSocialOrNome = ""
            let cpfcnpj = ""
            let endereco = ""
            let codibge = ""
            let numreceita = ""
            let nomepropriedade = ""
            let numnfe = elem.notafiscal
            let serie = elem.serie
            let cnpjEmpresa = empresa?.cpfcnpj
            let codibgeEmpresa = empresa?.codibge
            let dadosAgrot = {}
            let codembalagem;

            if(elem.idFornecedor !== null){
                fornecedor = await fornecedorRepo.indexFindBySelectSicca(idEmpresa, elem.idFornecedor)
                razaoSocialOrNome = fornecedor.nome
                cpfcnpj = fornecedor.cpfcnpj
                endereco = `${fornecedor.endereco} ${fornecedor.bairro} ${fornecedor.numero}`
                codibge = fornecedor.codibge

            }

             if(elem.idInfortecnica !== null){
                infortecnica = await infortecnicaSiccaRepo.index(elem.idInfortecnica, idEmpresa)
                receita = await receitaRepo.show(infortecnica.idReceita)

                cliente = await ClienteRepo.indexFindBySelectSicca(idEmpresa, receita.idCliente)
                razaoSocialOrNome = cliente.nome
                cpfcnpj = cliente.cpfcnpj
                codibge = cliente.codibge
                propriedade = await propriedadeRepo.indexSicca(receita.idPropriedade, idEmpresa)

             }

             codembalagem = await embalagem.query().select('codsicca')
             .where('unidadeembalagem', '=',elem.unidademmbalagem)
             .andWhere('capacidadeembalagem', '=', elem.tipoembalagem).first()

             dadosAgrot = {
                 registroagrotox: elem.registroagrotox,
                 quantidade: Math.abs(elem.quantidade),
                 codembalagem: codembalagem.codsicca,

             }

            if(elem.tipomovimentacao ==="VENDA"){
                data = moment(elem.datanfe).format('YYYY-MM-DD')
                tipoMov = "SAIDA"
                razaoSocialOrNome = cliente.nome
                cpfcnpj = cliente.cpfcnpj
                endereco = `${cliente.endereco} ${cliente.bairro} ${cliente.numero}`
                codibge = codibge
                numreceita = elem.receita || ""
                nomepropriedade = propriedade.nomepropriedade
            }


            return { 
                cnpjEmpresa: cnpjEmpresa,
                tipomovimentacao: tipoMov,
                numNFe: numnfe,
                serieNFe: serie,
                data: data,
                razaoSocialNome:razaoSocialOrNome.toUpperCase(),
                cpfcnpj: cpfcnpj,
                endereco: endereco.toUpperCase(),
                codibge: codibge,
                receita: numreceita,
                codibgeEmpresa: codibgeEmpresa,
                nomepropriedade: nomepropriedade.toUpperCase(),
                ...dadosAgrot
            }

        }))
        return relatorio
    }
}
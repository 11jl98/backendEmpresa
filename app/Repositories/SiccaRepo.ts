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

        const empresa = await Empresa.query().select('cpfcnpj', 'codibge').where('id_empresa','=', idEmpresa).first()

        const relatorio = await Promise.all(movimentaestoque.map(async (elem) => {
            let agrotoxicos = [] as any
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
            let cnpjEmpresa = empresa?.cpfcnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '')
            let codibgeEmpresa = empresa?.codibge
            let dadosAgrot= {} as any
            let codembalagem;
            if(elem.idFornecedor !== null){
                fornecedor = await fornecedorRepo.indexFindBySelectSicca(idEmpresa, elem.idFornecedor)
                razaoSocialOrNome = fornecedor.nome
                if(fornecedor.cpfcnpj.length === 18)
                    cpfcnpj = fornecedor.cpfcnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '')

                cpfcnpj = fornecedor.cpfcnpj.replace('.', '').replace('.', '').replace('.', '').replace('-', '')
                endereco = `${fornecedor.endereco} ${fornecedor.bairro} ${fornecedor.numero}`
                codibge = fornecedor.codibge

            }

             if(elem.idInfortecnica !== null){
                infortecnica = await infortecnicaSiccaRepo.index(elem.idInfortecnica, idEmpresa)
                receita = await receitaRepo.show(infortecnica.idReceita)
                
                infortecnica = await infortecnicaSiccaRepo.indexByReceita(receita.idReceita, idEmpresa)

                cliente = await ClienteRepo.indexFindBySelectSicca(idEmpresa, receita.idCliente)
                razaoSocialOrNome = cliente.nome
                if(cliente.cpfcnpj.length === 14)
                    cpfcnpj = cliente.cpfcnpj.replace('.', '').replace('.', '').replace('.', '').replace('-', '')

                cpfcnpj = cliente.cpfcnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '')
                
                codibge = cliente.codibge
                propriedade = await propriedadeRepo.indexSicca(receita.idPropriedade, idEmpresa)
             }




            if(elem.tipomovimentacao === "COMPRA"){

                codembalagem = await embalagem.query().select('codsicca')
                .where('unidadeembalagem', '=',elem.unidademmbalagem)
                .andWhere('capacidadeembalagem', '=', elem.tipoembalagem).first()

                dadosAgrot = {
                    registroagrotox: elem.registroagrotox,
                    quantidade: Math.abs(elem.quantidade),
                    codembalagem: codembalagem.codsicca,
   
                }
                agrotoxicos.push(dadosAgrot)
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

                for(let i = 0; i < infortecnica.length; i++){
                    codembalagem = await embalagem.query().select('codsicca')
                    .where('unidadeembalagem', '=',infortecnica[i].unidademmbalagem)
                    .andWhere('capacidadeembalagem', '=', infortecnica[i].tipoembalagem).first()
                    console.log(codembalagem)
                    dadosAgrot = {
                        registroagrotox: infortecnica[i].registroagrotoxico,
                        quantidade: infortecnica[i].quantembal,
                        codembalagem: codembalagem.codsicca,
                    }
                    agrotoxicos.push(dadosAgrot)
                }
            }

             const sicca = { 
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
                agrotoxicos
            }    
            return sicca       
        }))
        return relatorio


    }
}


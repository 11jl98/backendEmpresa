"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MovimentaestoqueRepo_1 = __importDefault(require("./MovimentaestoqueRepo"));
const ClienteRepo_1 = __importDefault(require("./ClienteRepo"));
const FornecedorRepo_1 = __importDefault(require("./FornecedorRepo"));
const InfortecnicaSiccaRepo_1 = __importDefault(require("./InfortecnicaSiccaRepo"));
const ReceitaRepo_1 = __importDefault(require("./ReceitaRepo"));
const PropriedadeRepo_1 = __importDefault(require("./PropriedadeRepo"));
const Empresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Empresa"));
const EmbalagensSicca_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/EmbalagensSicca"));
const moment_1 = __importDefault(require("moment"));
class SiccaRepositories {
    static async index(dataInicial, dataFinal, idEmpresa) {
        const movimentaestoque = await MovimentaestoqueRepo_1.default.indexByDateSicca(dataInicial, dataFinal, idEmpresa);
        const empresa = await Empresa_1.default.query().select('cpfcnpj', 'codibge').where('id_empresa', '=', idEmpresa).first();
        const relatorio = await Promise.all(movimentaestoque.map(async (elem) => {
            let agrotoxicos = [];
            let data = moment_1.default(elem.data).format('YYYY-MM-DD');
            let tipoMov = "ENTRADA";
            let fornecedor;
            let infortecnica;
            let receita;
            let cliente;
            let propriedade;
            let razaoSocialOrNome = "";
            let cpfcnpj = "";
            let endereco = "";
            let codibge = "";
            let numreceita = "";
            let nomepropriedade = "";
            let numnfe = elem.notafiscal;
            let serie = elem.serie;
            let cnpjEmpresa = empresa?.cpfcnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '');
            let codibgeEmpresa = empresa?.codibge;
            let dadosAgrot = {};
            let codembalagem;
            if (elem.idFornecedor !== null) {
                fornecedor = await FornecedorRepo_1.default.indexFindBySelectSicca(idEmpresa, elem.idFornecedor);
                razaoSocialOrNome = fornecedor.nome;
                if (fornecedor.cpfcnpj.length === 18)
                    cpfcnpj = fornecedor.cpfcnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '');
                cpfcnpj = fornecedor.cpfcnpj.replace('.', '').replace('.', '').replace('.', '').replace('-', '');
                endereco = `${fornecedor.endereco} ${fornecedor.bairro} ${fornecedor.numero}`;
                codibge = fornecedor.codibge;
            }
            if (elem.idInfortecnica !== null) {
                infortecnica = await InfortecnicaSiccaRepo_1.default.index(elem.idInfortecnica, idEmpresa);
                receita = await ReceitaRepo_1.default.show(infortecnica.idReceita);
                infortecnica = await InfortecnicaSiccaRepo_1.default.indexByReceita(receita.idReceita, idEmpresa);
                cliente = await ClienteRepo_1.default.indexFindBySelectSicca(idEmpresa, receita.idCliente);
                razaoSocialOrNome = cliente.nome;
                if (cliente.cpfcnpj.length === 14)
                    cpfcnpj = cliente.cpfcnpj.replace('.', '').replace('.', '').replace('.', '').replace('-', '');
                cpfcnpj = cliente.cpfcnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '');
                codibge = cliente.codibge;
                propriedade = await PropriedadeRepo_1.default.indexSicca(receita.idPropriedade, idEmpresa);
            }
            if (elem.tipomovimentacao === "COMPRA") {
                codembalagem = await EmbalagensSicca_1.default.query().select('codsicca')
                    .where('unidadeembalagem', '=', elem.unidademmbalagem)
                    .andWhere('capacidadeembalagem', '=', elem.tipoembalagem).first();
                dadosAgrot = {
                    registroagrotox: elem.registroagrotox,
                    quantidade: Math.abs(elem.quantidade),
                    codembalagem: codembalagem.codsicca,
                };
                agrotoxicos.push(dadosAgrot);
            }
            if (elem.tipomovimentacao === "VENDA") {
                data = moment_1.default(elem.datanfe).format('YYYY-MM-DD');
                tipoMov = "SAIDA";
                razaoSocialOrNome = cliente.nome;
                cpfcnpj = cliente.cpfcnpj;
                endereco = `${cliente.endereco} ${cliente.bairro} ${cliente.numero}`;
                codibge = codibge;
                numreceita = elem.receita || "";
                nomepropriedade = propriedade.nomepropriedade;
                for (let i = 0; i < infortecnica.length; i++) {
                    codembalagem = await EmbalagensSicca_1.default.query().select('codsicca')
                        .where('unidadeembalagem', '=', infortecnica[i].unidademmbalagem)
                        .andWhere('capacidadeembalagem', '=', infortecnica[i].tipoembalagem).first();
                    dadosAgrot = {
                        registroagrotox: infortecnica[i].registroagrotoxico,
                        quantidade: infortecnica[i].quantembal,
                        codembalagem: codembalagem.codsicca,
                    };
                    agrotoxicos.push(dadosAgrot);
                }
            }
            const sicca = {
                cnpjEmpresa: cnpjEmpresa,
                tipomovimentacao: tipoMov,
                numNFe: numnfe,
                serieNFe: serie,
                data: data,
                razaoSocialNome: razaoSocialOrNome.toUpperCase(),
                cpfcnpj: cpfcnpj,
                endereco: endereco.toUpperCase(),
                codibge: codibge,
                receita: numreceita,
                codibgeEmpresa: codibgeEmpresa,
                nomepropriedade: nomepropriedade.toUpperCase(),
                agrotoxicos
            };
            return sicca;
        }));
        return relatorio;
    }
}
exports.default = SiccaRepositories;
//# sourceMappingURL=SiccaRepo.js.map
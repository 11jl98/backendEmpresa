"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Receita_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Receita"));
const Infortecnica_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Infortecnica"));
class ReceitaRepositories {
    static async index(texto, filtro, page, idEmpresa) {
        const receitas = await Receita_1.default.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return receitas;
    }
    static async indexPaginate(page, idEmpresa) {
        const receitas = await Receita_1.default.query().select(['id_receita', 'id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato', 'nomecliente', 'nomeresponsavel'])
            .where('id_empresa', '=', idEmpresa)
            .preload('cliente')
            .preload('responsavel')
            .paginate(page, 5);
        return receitas;
    }
    static async indexParamsDate(texto, filtro, dataInit, dataFinal, page, idEmpresa) {
        const propriedade = await Receita_1.default.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return propriedade;
    }
    static async indexDate(dataInit, dataFinal, page, idEmpresa) {
        const receitas = await Receita_1.default.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)
            .paginate(page, 5);
        return receitas;
    }
    static async show(idReceita) {
        const receitas = await Receita_1.default.query().select().where('id_receita', '=', idReceita).first();
        return receitas;
    }
    static async deleteInfoByReceita(idReceita, idEmpresa) {
        const info = await Infortecnica_1.default.query().select()
            .where('id_receita', '=', idReceita)
            .andWhere('id_empresa', '=', idEmpresa);
        return info;
    }
    static async indexByArtResponsavel(art, id_responsavel, idEmpresa) {
        const receitas = await Receita_1.default.query().select()
            .where('numeroart', '=', art)
            .andWhere('id_responsavel', '=', id_responsavel)
            .andWhere('id_empresa', '=', idEmpresa)
            .count('id_receita as total');
        return receitas;
    }
    static async getReceitas(dataInit, dataFinal, idEmpresa) {
        const receitas = await Receita_1.default.query().select()
            .where('id_empresa', '=', idEmpresa)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)
            .count('id_receita as total')
            .groupBy('data');
        return receitas;
    }
}
exports.default = ReceitaRepositories;
//# sourceMappingURL=ReceitaRepo.js.map
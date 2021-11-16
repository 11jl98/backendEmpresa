"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponsavelTecnico_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ResponsavelTecnico"));
class ResponsavelRepositories {
    constructor(ctx) {
        this.ctx = ctx;
    }
    static async index(filtro, texto, page, idEmpresa) {
        const responsavel = await ResponsavelTecnico_1.default.query()
            .select(['id_responsavel', 'nome', 'cpf', 'crea', 'endereco', 'bairro', 'numero', 'cidade', 'uf',
            'cep', 'telefone', 'email', 'receitasart', 'proximareceita', 'artatual',
            'observacao', 'profissao', 'tokensc', 'complementoreceita', 'seriesc', 'conselho', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return responsavel;
    }
    static async indexInit(page, idEmpresa) {
        const responsavel = await ResponsavelTecnico_1.default.query()
            .select(['id_responsavel', 'nome', 'cpf', 'crea', 'endereco', 'bairro', 'numero', 'cidade', 'uf',
            'cep', 'telefone', 'email', 'receitasart', 'proximareceita', 'artatual',
            'observacao', 'profissao', 'tokensc', 'complementoreceita', 'seriesc', 'conselho', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .paginate(page, 5);
        return responsavel;
    }
    static async indexFindBySelect(idEmpresa) {
        const responsavel = await ResponsavelTecnico_1.default.query().select(['id_responsavel', 'nome']).where('id_empresa', '=', idEmpresa);
        return responsavel;
    }
}
exports.default = ResponsavelRepositories;
//# sourceMappingURL=ResponsavelRepo.js.map
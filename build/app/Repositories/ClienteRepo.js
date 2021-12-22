"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cliente"));
class Clienterepositories {
    constructor(ctx) {
        this.ctx = ctx;
    }
    static async index(filtro, texto, page, idEmpresa) {
        const cliente = await Cliente_1.default.query()
            .select(['id_cliente', 'nome', 'cpfcnpj', 'endereco', 'bairro',
            'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'iepr', 'observacao', 'rgie', 'codibge'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return cliente;
    }
    static async indexInit(page, idEmpresa) {
        const cliente = await Cliente_1.default.query()
            .select(['id_cliente', 'nome', 'cpfcnpj', 'endereco', 'bairro',
            'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'iepr', 'observacao', 'rgie', 'codibge'])
            .where('id_empresa', '=', idEmpresa)
            .paginate(page, 5);
        return cliente;
    }
    static async indexFindBySelectSicca(idEmpresa, idCliente) {
        const cliente = await Cliente_1.default.query().select(['nome', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'codibge'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('id_cliente', '=', idCliente).first();
        return cliente;
    }
}
exports.default = Clienterepositories;
//# sourceMappingURL=ClienteRepo.js.map
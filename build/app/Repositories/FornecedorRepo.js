"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedor_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Fornecedor"));
class FornecedorRepositories {
    static async indexFindBySelect(idEmpresa) {
        const fornecedor = await Fornecedor_1.default.query().select(['id_fornecedor', 'nome'])
            .where('id_empresa', '=', idEmpresa);
        return fornecedor;
    }
    static async indexPaginate(texto, filtro, page, idEmpresa) {
        const fornecedor = await Fornecedor_1.default.query().select(['id_fornecedor', 'nome', 'nomefantasia', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'ie', 'observacao'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return fornecedor;
    }
    static async indexInit(page, idEmpresa) {
        const fornecedor = await Fornecedor_1.default.query().select(['id_fornecedor', 'nome', 'nomefantasia', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'ie', 'observacao'])
            .where('id_empresa', '=', idEmpresa)
            .paginate(page, 5);
        return fornecedor;
    }
    static async indexFindBySelectSicca(idEmpresa, idFornecedor) {
        const fornecedor = await Fornecedor_1.default.query().select(['nome', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'codibge'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('id_fornecedor', '=', idFornecedor).first();
        return fornecedor;
    }
}
exports.default = FornecedorRepositories;
//# sourceMappingURL=FornecedorRepo.js.map
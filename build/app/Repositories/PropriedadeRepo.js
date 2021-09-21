"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Propriedade_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Propriedade"));
class PropriedadesRepositories {
    constructor(ctx) {
        this.ctx = ctx;
    }
    static async indexInit(idCliente, idEmpresa) {
        const propriedade = await Propriedade_1.default.query().select(['id_propriedade', 'nomepropriedade', 'cidade'])
            .where('id_cliente', '=', idCliente)
            .andWhere('id_empresa', '=', idEmpresa);
        return propriedade;
    }
    static async show(idPropriedade, idEmpresa) {
        const propriedade = await Propriedade_1.default.query().select(['id_propriedade', 'id_empresa',
            'id_cliente', 'nomepropriedade', 'endereco', 'bairro', 'numero', 'cidade',
            'uf', 'cep', 'cnpj', 'email', 'latitude', 'longitude', 'telefone', 'iepr',])
            .where('id_propriedade', '=', idPropriedade)
            .andWhere('id_empresa', '=', idEmpresa);
        return propriedade;
    }
}
exports.default = PropriedadesRepositories;
//# sourceMappingURL=PropriedadeRepo.js.map
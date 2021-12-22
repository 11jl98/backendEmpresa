"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Infortecnica_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Infortecnica"));
class InfortecnicaRepositories {
    static async index(idInfortecnica, idEmpresa) {
        const info = await Infortecnica_1.default.query()
            .where('id_empresa', '=', idEmpresa)
            .andWhere('id_infortecnica', '=', idInfortecnica)
            .first();
        return info;
    }
    static async indexByReceita(idReceita, idEmpresa) {
        const info = await Infortecnica_1.default.query()
            .where('id_empresa', '=', idEmpresa)
            .andWhere('id_receita', '=', idReceita);
        return info;
    }
}
exports.default = InfortecnicaRepositories;
//# sourceMappingURL=InfortecnicaSiccaRepo.js.map
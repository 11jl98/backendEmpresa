"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lote_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Lote"));
class PropriedadesRepositories {
    constructor(ctx) {
        this.ctx = ctx;
    }
    static async index(idAgrotoxico, embalagem, capacidadeEmbalagem, unidadeEmbalagem, idEmpresa) {
        const lotes = await Lote_1.default.query()
            .select(['id_lote', 'numlote', 'datavencimento'])
            .where('id_empresa', '=', idEmpresa)
            .where('id_agrotoxico', '=', idAgrotoxico)
            .andWhere('embalagem', '=', embalagem.trim())
            .andWhere('capacidadeembalagem', '=', capacidadeEmbalagem.trim())
            .andWhere('unidadeembalagem', '=', unidadeEmbalagem.trim());
        return lotes;
    }
}
exports.default = PropriedadesRepositories;
//# sourceMappingURL=LoteRepo.js.map
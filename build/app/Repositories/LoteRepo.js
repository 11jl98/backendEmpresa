"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lote_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Lote"));
class LoteRepositories {
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
    static async indexNum(idAgrotoxico, embalagem, capacidadeEmbalagem, unidadeEmbalagem, numlote, idEmpresa) {
        const lotes = await Lote_1.default.query()
            .select(['id_lote', 'numlote', 'datavencimento'])
            .where('id_empresa', '=', idEmpresa)
            .where('id_agrotoxico', '=', idAgrotoxico)
            .andWhere('embalagem', '=', embalagem.trim())
            .andWhere('capacidadeembalagem', '=', capacidadeEmbalagem.trim())
            .andWhere('unidadeembalagem', '=', unidadeEmbalagem.trim())
            .andWhere('numlote', '=', numlote.trim());
        return lotes;
    }
    static async LoteAvencer(dataInit, dataFinal, idEmpresa) {
        const lotes = await Lote_1.default.query()
            .select(['id_lote', 'nomeagrotoxico', 'numlote', 'datavencimento', 'embalagem', 'capacidadeembalagem', 'unidadeembalagem'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('datavencimento', '>=', dataInit)
            .andWhere('datavencimento', '<=', dataFinal)
            .count('id_lote as total')
            .groupBy('id_lote')
            .orderBy('datavencimento');
        return lotes;
    }
}
exports.default = LoteRepositories;
//# sourceMappingURL=LoteRepo.js.map
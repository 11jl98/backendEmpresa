"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lote_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Lote"));
const LoteValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/LoteValidator"));
const LoteRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/LoteRepo"));
const uuid_1 = require("uuid");
class LotesController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const id_agrotoxico = params.idAgrotoxico;
        let embalagem = params.embalagem;
        let unidademmbalagem = params.unidademmbalagem;
        let capacidadeembalagem = params.capacidadeembalagem;
        embalagem = decodeURIComponent(embalagem);
        
        const lotes = await LoteRepo_1.default.index(id_agrotoxico, embalagem, capacidadeembalagem, unidademmbalagem, id);
        return lotes;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(LoteValidator_1.default.LoteValidatorStore);
        const lote = await Lote_1.default.create({
            idEmpresa: id,
            ...data,
            idLote: uuid_1.v4()
        });
        return lote;
    }
    async show({ params }) {
        const lote = Lote_1.default.findOrFail(params.id);
        return lote;
    }
    async update({ request, params }) {
        const lote = await Lote_1.default.findOrFail(params.id);
        const data = await request.validate(LoteValidator_1.default.LoteValidatorUpdate);
        lote.merge(data);
        await lote.save();
        return lote;
    }
    async destroy({ params }) {
        const lote = await Lote_1.default.findOrFail(params.id);
        await lote.delete();
    }
}
exports.default = LotesController;
//# sourceMappingURL=LotesController.js.map
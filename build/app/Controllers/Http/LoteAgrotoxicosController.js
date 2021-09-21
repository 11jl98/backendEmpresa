"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoteAgrotoxico_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/LoteAgrotoxico"));
const LoteAgrotoxicoValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/LoteAgrotoxicoValidator"));
const uuid_1 = require("uuid");
class LoteAgrotoxicosController {
    async index({}) {
        const agroLote = await LoteAgrotoxico_1.default.all();
        return agroLote;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(LoteAgrotoxicoValidator_1.default);
        const agroLote = await LoteAgrotoxico_1.default.create({
            idEmpresa: id,
            ...data,
            id: uuid_1.v4()
        });
        return agroLote;
    }
    async show({ params }) {
        const agroLote = await LoteAgrotoxico_1.default.findOrFail(params.id);
        return agroLote;
    }
    async update({ request, params }) {
        const agroLote = await LoteAgrotoxico_1.default.findOrFail(params.id);
        const data = await request.validate(LoteAgrotoxicoValidator_1.default);
        agroLote.merge(data);
        await agroLote.save();
        return agroLote;
    }
    async destroy({ params }) {
        const agroLote = await LoteAgrotoxico_1.default.findOrFail(params.id);
        await agroLote.delete();
    }
}
exports.default = LoteAgrotoxicosController;
//# sourceMappingURL=LoteAgrotoxicosController.js.map
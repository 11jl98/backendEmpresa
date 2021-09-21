"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PropriedadeRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/PropriedadeRepo"));
const Propriedade_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Propriedade"));
const PropriedadeValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/PropriedadeValidator"));
const uuid_1 = require("uuid");
class PropriedadesController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const propriedade = await PropriedadeRepo_1.default.indexInit(params.id, id);
        return propriedade;
    }
    async indexInit({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const propriedade = await PropriedadeRepo_1.default.indexInit(params.id, id);
        return propriedade;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(PropriedadeValidator_1.default.PropriedadeValidatorStore);
        console.log(data);
        const propriedade = await Propriedade_1.default.create({
            ...data,
            idEmpresa: id,
            idPropriedade: uuid_1.v4()
        });
        await propriedade.preload('cliente');
        return propriedade;
    }
    async show({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const propriedade = await PropriedadeRepo_1.default.show(params.id, id);
        return propriedade;
    }
    async update({ request, params }) {
        const propriedade = await Propriedade_1.default.findOrFail(params.id);
        const data = await request.validate(PropriedadeValidator_1.default.PropriedadeValidatorUpdate);
        propriedade.merge(data);
        await propriedade.save();
        return propriedade;
    }
    async destroy({ params }) {
        const propriedade = await Propriedade_1.default.findOrFail(params.id);
        await propriedade.delete();
    }
}
exports.default = PropriedadesController;
//# sourceMappingURL=PropriedadesController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Infortecnica_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Infortecnica"));
const InfortecnicaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/InfortecnicaValidator"));
const uuid_1 = require("uuid");
class InfortecnicaReceitasController {
    async index({}) {
        const info = Infortecnica_1.default.all();
        return info;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(InfortecnicaValidator_1.default);
        const info = await Infortecnica_1.default.create({
            ...data,
            idEmpresa: id,
            idInfortecnica: uuid_1.v4()
        });
        await info.preload('receita');
        return info;
    }
    async show({ params }) {
        const info = await Infortecnica_1.default.findOrFail(params.id);
        return info;
    }
    async update({ request, params }) {
        console.log('cheguemos no put', params.id);
        const info = await Infortecnica_1.default.findOrFail(params.id);
        console.log('taaquiiiii', info);
        const data = await request.validate(InfortecnicaValidator_1.default);
        info.merge(data);
        await info.save();
        return info;
    }
    async destroy({ params }) {
        const info = await Infortecnica_1.default.findOrFail(params.id);
        info.delete();
    }
}
exports.default = InfortecnicaReceitasController;
//# sourceMappingURL=InfortecnicasController.js.map
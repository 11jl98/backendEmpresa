"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Empresa"));
const EmpresaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/EmpresaValidator"));
const uuid_1 = require("uuid");
class EmpresasController {
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        console.log('chegou aqui');
        const data = await request.validate(EmpresaValidator_1.default.EmpresaValidatorStore);
        console.log('chegou aqui');
        const empresa = await Empresa_1.default.create({
            idEmpresa: id,
            idCadastro: uuid_1.v4(),
            ...data
        });
        return empresa;
    }
    async show({ params }) {
        const empresa = await Empresa_1.default.findOrFail(params.id);
        return empresa;
    }
    async update({ request, params }) {
        const empresa = await Empresa_1.default.findOrFail(params.id);
        const data = await request.validate(EmpresaValidator_1.default.EmpresaValidatorUpdate);
        empresa.merge(data);
        await empresa.save();
        return empresa;
    }
    async destroy({ params }) {
        const empresa = await Empresa_1.default.findOrFail(params.id);
        await empresa.delete();
    }
}
exports.default = EmpresasController;
//# sourceMappingURL=EmpresasController.js.map
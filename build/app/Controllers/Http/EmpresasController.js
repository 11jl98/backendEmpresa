"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Empresa"));
const EmpresaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/EmpresaValidator"));
const uuid_1 = require("uuid");
class EmpresasController {
    async index({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const empresa = await Empresa_1.default.query().select('nomeempresa', 'nomefantasia', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'ie', 'avatar_logo').where('id_empresa', '=', id);
        console.log(empresa);
        return empresa;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(EmpresaValidator_1.default.EmpresaValidatorStore);
        const empresa = await Empresa_1.default.create({
            idEmpresa: id,
            idCadastro: Uuid,
            ...data
        });
        empresa.idCadastro = Uuid;
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
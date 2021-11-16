"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponsavelTecnico_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ResponsavelTecnico"));
const ResponsavelRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/ResponsavelRepo"));
const ResponsavelValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/ResponsavelValidator"));
const uuid_1 = require("uuid");
class ResponsavelTecnicosController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let texto = params.texto;
        let filtro = params.filtro;
        texto = decodeURIComponent(texto);
        const responsavel = await ResponsavelRepo_1.default.index(filtro, texto, page, id);
        return responsavel;
    }
    async indexInit({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        const responsavel = await ResponsavelRepo_1.default.indexInit(page, id);
        return responsavel;
    }
    async indexFindBySelect({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const responsavel = await ResponsavelRepo_1.default.indexFindBySelect(id);
        return responsavel;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(ResponsavelValidator_1.default.ResponsavelValidatorStore);
        const responsavel = await ResponsavelTecnico_1.default.create({
            ...data,
            idEmpresa: id,
            idResponsavel: Uuid
        });
        responsavel.idResponsavel = Uuid;
        return responsavel;
    }
    async show({ params }) {
        const responsavel = await ResponsavelTecnico_1.default.findOrFail(params.id);
        return responsavel;
    }
    async update({ params, request }) {
        const responsavel = await ResponsavelTecnico_1.default.findOrFail(params.id);
        const data = await request.validate(ResponsavelValidator_1.default.ResponsavelValidatorUpdate);
        responsavel.merge(data);
        await responsavel.save();
        return responsavel;
    }
    async destroy({ params }) {
        const responsavel = await ResponsavelTecnico_1.default.findOrFail(params.id);
        responsavel.delete();
        return responsavel;
    }
}
exports.default = ResponsavelTecnicosController;
//# sourceMappingURL=ResponsavelTecnicosController.js.map
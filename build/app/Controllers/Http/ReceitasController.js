"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Receita_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Receita"));
const ReceitaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/ReceitaValidator"));
const uuid_1 = require("uuid");
const ReceitaRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/ReceitaRepo"));
const ResponsavelTecnico_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ResponsavelTecnico"));
class ReceitasController {
    async index({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let texto = params.texto;
        let filtro = params.filtro;
        texto = decodeURIComponent(texto);
        const receitas = await ReceitaRepo_1.default.index(filtro, texto, page, id);
        return receitas;
    }
    async indexPaginate({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        const receitas = await ReceitaRepo_1.default.indexPaginate(page, id);
        return receitas;
    }
    async indexDate({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let dataInit = params.dataInit;
        let dataFinal = params.dataFinal;
        const receitas = await ReceitaRepo_1.default.indexDate(dataInit, dataFinal, page, id);
        return receitas;
    }
    async indexParamsDate({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let dataInit = params.dataInit;
        let dataFinal = params.dataFinal;
        let texto = params.texto;
        let filtro = params.filtro;
        texto = decodeURIComponent(texto);
        const receitas = await ReceitaRepo_1.default.indexParamsDate(texto, filtro, dataInit, dataFinal, page, id);
        return receitas;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(ReceitaValidator_1.default.ReceitaValidatorStore);
        const receitas = await Receita_1.default.create({
            ...data,
            idEmpresa: id,
            idReceita: Uuid
        });
        const responsavel = await ResponsavelTecnico_1.default.findOrFail(receitas.idResponsavel);
        responsavel.merge({
            proximareceita: String(parseInt(receitas.numeroreceita) + 1)
        });
        await responsavel.save();
        receitas.idReceita = Uuid;
        return receitas;
    }
    async show({ params }) {
        const receitas = await ReceitaRepo_1.default.show(params.id);
        await receitas.preload('cliente');
        await receitas.preload('propriedade');
        await receitas.preload('responsavel');
        return receitas;
    }
    async update({ params, request }) {
        const receitas = await Receita_1.default.findOrFail(params.id);
        const data = await request.validate(ReceitaValidator_1.default.ReceitaValidatorUpdate);
        receitas.merge(data);
        await receitas.save();
        await receitas.preload('cliente');
        await receitas.preload('propriedade');
        await receitas.preload('responsavel');
        return receitas;
    }
    async destroy({ params, auth, response }) {
        const user = await auth.authenticate();
        const id = user.id;
        const receitas = await Receita_1.default.findOrFail(params.id);
        const receitasInfo = await ReceitaRepo_1.default.deleteInfoByReceita(params.id, id);
        
        if (receitasInfo.length > 0) {
            
            return response.status(409);
        }
        await receitas.delete();
    }
}
exports.default = ReceitasController;
//# sourceMappingURL=ReceitasController.js.map
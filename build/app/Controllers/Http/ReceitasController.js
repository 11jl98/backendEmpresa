"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Receita_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Receita"));
const ReceitaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/ReceitaValidator"));
const uuid_1 = require("uuid");
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class ReceitasController {
    async index({ request }) {
        const page = request.input('page', 1);
        const receitas = await Database_1.default.from('receitas').paginate(page, 5);
        return receitas;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(ReceitaValidator_1.default.ReceitaValidatorStore);
        const receitas = await Receita_1.default.create({
            ...data,
            idEmpresa: id,
            idReceita: uuid_1.v4()
        });
        await receitas.preload('cliente');
        await receitas.preload('propriedade');
        await receitas.preload('responsavel');
        return receitas;
    }
    async show({ params }) {
        const receitas = await Receita_1.default.findOrFail(params.id);
        await receitas.preload('cliente');
        await receitas.preload('propriedade');
        await receitas.preload('responsavel');
        return receitas;
    }
    async showDate({ params }) {
        const receitas = await Receita_1.default.query()
            .where('data', '>=', params.dataInit)
            .andWhere('data', '<=', params.dataFinal).preload('cliente')
            .preload('propriedade')
            .preload('responsavel');
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
    async destroy({ params }) {
        const receitas = await Receita_1.default.findOrFail(params.id);
        receitas.delete();
    }
}
exports.default = ReceitasController;
//# sourceMappingURL=ReceitasController.js.map
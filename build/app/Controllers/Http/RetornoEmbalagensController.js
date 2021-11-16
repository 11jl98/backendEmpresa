"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RetornoEmbalagen_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/RetornoEmbalagen"));
const uuid_1 = require("uuid");
class RetornoEmbalagensController {
    async index({}) {
        const retorno = await RetornoEmbalagen_1.default.all();
        return retorno;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = request.only(['id_cliente', 'data', 'embdevolvidas', 'nomecliente', 'nomeembalagem', 'nomeagrotoxico',
            'registroagrotoxico', 'numeronf', 'numeroreceita', 'quantidadesaida', 'observacao']);
        const retorno = await RetornoEmbalagen_1.default.create({
            idEmpresa: id,
            ...data,
            idRetornoembal: uuid_1.v4()
        });
        return retorno;
    }
    async show({ params }) {
        const retorno = await RetornoEmbalagen_1.default.findOrFail(params.id);
        return retorno;
    }
    async update({ params, request }) {
        const retorno = await RetornoEmbalagen_1.default.findOrFail(params.id);
        const data = await request.only(['id_cliente', 'data', 'embdevolvidas', 'nomecliente', 'nomeembalagem', 'nomeagrotoxico',
            'registroagrotoxico', 'numeronf', 'numeroreceita', 'quantidadesaida', 'observacao']);
        retorno.merge(data);
        await retorno.save;
        return retorno;
    }
    async destroy({ params }) {
        const retorno = await RetornoEmbalagen_1.default.findOrFail(params.id);
        await retorno.delete();
    }
}
exports.default = RetornoEmbalagensController;
//# sourceMappingURL=RetornoEmbalagensController.js.map
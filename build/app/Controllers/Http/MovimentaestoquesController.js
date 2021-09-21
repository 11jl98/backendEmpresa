"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
const uuid_1 = require("uuid");
class MovimentaestoquesController {
    async index({}) {
        const estoque = await Movimentaestoque_1.default.all();
        return estoque;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = request.only(['idFornecedor', 'data', 'datavencimento', 'datanfe', 'dentroestado', 'embalagemindea',
            'enviado', 'nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 'tipomovimentacao',
            'json', 'naturezaoperacao', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox',
            'serie', 'statussc']);
        if (data.tipomovimentacao !== "ENTRADA") {
            data.quantidade = -(data.quantidade);
        }
        const estoque = await Movimentaestoque_1.default.create({
            ...data,
            idEmpresa: id,
            idEstoque: uuid_1.v4()
        });
        return estoque;
    }
    async show({ params }) {
        const estoque = await Movimentaestoque_1.default.findOrFail(params.id);
        return estoque;
    }
    async update({ params, request }) {
        const estoque = await Movimentaestoque_1.default.findOrFail(params.id);
        const data = request.only(['idFornecedor', 'data', 'datavencimento', 'datanfe', 'dentroestado', 'embalagemindea',
            'enviado', 'nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 'tipomovimentacao',
            'json', 'naturezaoperacao', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox',
            'serie', 'statussc']);
        if (data.tipomovimentacao !== "ENTRADA") {
            data.quantidade = -(data.quantidade);
        }
        estoque.merge(data);
        await estoque.save();
        return estoque;
    }
    async destroy({ params }) {
        const estoque = await Movimentaestoque_1.default.findOrFail(params.id);
        estoque.delete();
    }
}
exports.default = MovimentaestoquesController;
//# sourceMappingURL=MovimentaestoquesController.js.map
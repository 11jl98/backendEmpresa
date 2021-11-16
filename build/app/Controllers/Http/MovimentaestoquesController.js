"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
const MovimentaEtoqueValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/MovimentaEtoqueValidator"));
const MovimentaestoqueRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/MovimentaestoqueRepo"));
const uuid_1 = require("uuid");
class MovimentaestoquesController {
    async index({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        const estoque = await MovimentaestoqueRepo_1.default.indexInit(page, id);
        return estoque;
    }
    async indexByParams({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let texto = params.texto;
        let filtro = params.filtro;
        texto = decodeURIComponent(texto);
        const estoque = await MovimentaestoqueRepo_1.default.indexByParams(texto, filtro, page, id);
        return estoque;
    }
    async indexByDate({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let dataInit = params.dataInit;
        let dataFinal = params.dataFinal;
        const estoque = await MovimentaestoqueRepo_1.default.indexByDate(dataInit, dataFinal, page, id);
        return estoque;
    }
    async indexByParamsDate({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let texto = params.texto;
        let filtro = params.filtro;
        let page = params.page;
        let dataInit = params.dataInit;
        let dataFinal = params.dataFinal;
        const estoque = await MovimentaestoqueRepo_1.default.indexByParamsDate(texto, filtro, dataInit, dataFinal, page, id);
        return estoque;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(MovimentaEtoqueValidator_1.default);
        const teste = request.only(['data', 'datanfe', 'datavencimento']);
        if (data.tipomovimentacao === "VENDA" || data.tipomovimentacao === "INVENTARIO-SAIDA" || data.tipomovimentacao === "DEVOLUCAO" || data.tipomovimentacao === 'TRANSFERENCIA-SAIDA') {
            data.quantidade = -(data.quantidade);
        }
        const dataNow = teste.data.split('-');
        const dataNfe = teste.datanfe;
        const datavencimento = teste.datavencimento;
        if (dataNow[0].length !== 4) {
            return { message: "ano invalido" };
        }
        if (dataNow[1].length === 2) {
            if (dataNow[1] > 12 || dataNow[1] < 1) {
                return { message: "mês invalido" };
            }
        }
        if (dataNow[2].length === 2) {
            if (dataNow[2] > 31 || dataNow[2] < 1) {
                return { message: "dia invalido" };
            }
        }
        const estoque = await Movimentaestoque_1.default.create({
            ...data,
            data: teste.data,
            datanfe: dataNfe,
            datavencimento: datavencimento,
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
        const data = await request.validate(MovimentaEtoqueValidator_1.default);
        const teste = request.only(['data', 'datanfe', 'datavencimento']);
        if (data.tipomovimentacao === "VENDA" || data.tipomovimentacao === "INVENTARIO-SAIDA" || data.tipomovimentacao === "DEVOLUCAO" || data.tipomovimentacao === 'TRANSFERENCIA-SAIDA') {
            data.quantidade = -(data.quantidade);
        }
        const dataNow = teste.data.split('-');
        const dataNfe = teste.datanfe;
        const datavencimento = teste.datavencimento;
        if (dataNow[0].length !== 4) {
            return { message: "ano invalido" };
        }
        if (dataNow[1].length === 2) {
            if (dataNow[1] > 12 || dataNow[1] < 1) {
                return { message: "mês invalido" };
            }
        }
        if (dataNow[2].length === 2) {
            if (dataNow[2] > 31 || dataNow[2] < 1) {
                return { message: "dia invalido" };
            }
        }
        estoque.merge({
            ...data,
            data: teste.data,
            datanfe: dataNfe,
            datavencimento: datavencimento,
        });
        await estoque.save();
        return estoque;
    }
    async destroy({ params }) {
        const estoque = await Movimentaestoque_1.default.findOrFail(params.id);
        await estoque.delete();
    }
}
exports.default = MovimentaestoquesController;
//# sourceMappingURL=MovimentaestoquesController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedor_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Fornecedor"));
const FornecedorValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/FornecedorValidator"));
const uuid_1 = require("uuid");
const FornecedorRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/FornecedorRepo"));
class FornecedorController {
    async index({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const fornecedor = await FornecedorRepo_1.default.indexFindBySelect(id);
        return fornecedor;
    }
    async indexInit({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        const responsavel = await FornecedorRepo_1.default.indexInit(page, id);
        return responsavel;
    }
    async indexPaginate({ auth, params }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let texto = params.texto;
        let filtro = params.filtro;
        texto = decodeURIComponent(texto);
        const responsavel = await FornecedorRepo_1.default.indexPaginate(texto, filtro, page, id);
        return responsavel;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(FornecedorValidator_1.default.FornecedorValidatorStore);
        const fornecedor = await Fornecedor_1.default.create({
            ...data,
            idEmpresa: id,
            idFornecedor: Uuid
        });
        fornecedor.idFornecedor = Uuid;
        return fornecedor;
    }
    async show({ params }) {
        const fornecedor = await Fornecedor_1.default.findOrFail(params.id);
        return fornecedor;
    }
    async update({ params, request }) {
        const fornecedor = await Fornecedor_1.default.findOrFail(params.id);
        const data = await request.validate(FornecedorValidator_1.default.FornecedorValidatorUpdate);
        fornecedor.merge(data);
        await fornecedor.save();
        return fornecedor;
    }
    async destroy({ params }) {
        const fornecedor = await Fornecedor_1.default.findOrFail(params.id);
        await fornecedor.delete();
    }
}
exports.default = FornecedorController;
//# sourceMappingURL=FornecedorController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cliente"));
const ClienteRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/ClienteRepo"));
const ClienteValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/ClienteValidator"));
const uuid_1 = require("uuid");
class ClientesController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        let texto = params.texto;
        let filtro = params.filtro;
        texto = decodeURIComponent(texto);
        const cliente = await ClienteRepo_1.default.index(filtro, texto, page, id);
        return cliente;
    }
    async indexInit({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        let page = params.page;
        const cliente = await ClienteRepo_1.default.indexInit(page, id);
        return cliente;
    }
    async indexFindByCliente({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const cliente = await Cliente_1.default.query().select(['id_cliente', 'nome'])
            .where('id_empresa', '=', id);
        return cliente;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(ClienteValidator_1.default.ClienteValidatorStore);
        const Uuid = uuid_1.v4();
        const cliente = await Cliente_1.default.create({
            idEmpresa: id,
            idCliente: Uuid,
            ...data
        });
        cliente.idCliente = Uuid;
        return cliente;
    }
    async show({ params }) {
        const cliente = await Cliente_1.default.findOrFail(params.id);
        return cliente;
    }
    async update({ request, params }) {
        const cliente = await Cliente_1.default.findOrFail(params.id);
        const data = await request.validate(ClienteValidator_1.default.ClienteValidatorUpdate);
        cliente.merge(data);
        await cliente.save();
        return cliente;
    }
    async destroy({ params }) {
        const cliente = await Cliente_1.default.findOrFail(params.id);
        await cliente.delete();
        return cliente;
    }
}
exports.default = ClientesController;
//# sourceMappingURL=ClientesController.js.map
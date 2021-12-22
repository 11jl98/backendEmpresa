"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Configuracao_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Configuracao"));
const ConfiguracaoValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/ConfiguracaoValidator"));
const uuid_1 = require("uuid");
class ConfiguracaosController {
    async index({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const config = await Configuracao_1.default.query().select(['estoquenegativo', 'id_config', 'modeloreceita', 'quantidadeprodutoreceita']).where('id_empresa', '=', id);
        return config;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(ConfiguracaoValidator_1.default);
        const config = await Configuracao_1.default.create({
            idEmpresa: id,
            idConfig: Uuid,
            ...data
        });
        config.idConfig = Uuid;
        return config;
    }
    async update({ params, request }) {
        const config = await Configuracao_1.default.findOrFail(params.id);
        const data = await request.validate(ConfiguracaoValidator_1.default);
        config.merge(data);
        await config.save();
        return config;
    }
}
exports.default = ConfiguracaosController;
//# sourceMappingURL=ConfiguracaosController.js.map
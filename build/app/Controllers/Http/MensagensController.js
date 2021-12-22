"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mensagem_1 = __importDefault(require("../../Models/Mensagem"));
const MensagemValidator_1 = __importDefault(require("../../Validators/MensagemValidator"));
const uuid_1 = require("uuid");
class MensagensController {
    async index({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const mensagem = await Mensagem_1.default
            .query()
            .select()
            .where("id_empresa", "=", id);
        return mensagem;
    }
    async paginateMensagens({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const mensagem = await Mensagem_1.default
            .query()
            .select('id_mensagem', 'titulo', 'observacao')
            .where('id_empresa', '=', id)
            .paginate(params.page, 5);
        return mensagem;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(MensagemValidator_1.default.MensagemValidatorStore);
        const mensagem = await Mensagem_1.default.create({
            idEmpresa: id,
            id_mensagem: Uuid,
            ...data
        });
        mensagem.id_mensagem = Uuid;
        return mensagem;
    }
    async show({}) {
    }
    async edit({}) {
    }
    async update({}) {
    }
    async destroy({}) {
    }
}
exports.default = MensagensController;
//# sourceMappingURL=MensagensController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mip_1 = __importDefault(require("../../Models/Mip"));
const MipValidator_1 = __importDefault(require("../../Validators/MipValidator"));
const uuid_1 = require("uuid");
class MipsController {
    async index({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const mip = await Mip_1.default
            .query()
            .select()
            .where("id_empresa", "=", id);
        return mip;
    }
    async paginateMips({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const mip = await Mip_1.default
            .query()
            .select('id_mip', 'titulo', 'observacao')
            .where("id_empresa", "=", id)
            .paginate(params.page, 5);
        return mip;
    }
    async store({ request, auth }) {
        const Uuid = uuid_1.v4();
        const user = await auth.authenticate();
        const id = user.id;
        const data = await request.validate(MipValidator_1.default.MipValidatorStore);
        const mip = await Mip_1.default.create({
            idEmpresa: id,
            id_mip: Uuid,
            ...data
        });
        mip.id_mip = Uuid;
        return mip;
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
exports.default = MipsController;
//# sourceMappingURL=MipsController.js.map
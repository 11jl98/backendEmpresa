"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
class AvataLogoController {
    async update({ request, auth }) {
        const response = await Database_1.default.transaction(async (trx) => {
            const user = await (await auth.authenticate()).useTransaction(trx);
            const userId = await auth.authenticate();
            const id = userId.id;
            const file = await request.file('file');
            const queryPayload = {};
            const savePayload = {
                filename: `${id}.${file?.extname}`
            };
            const avatar = await user.related('avatar').firstOrCreate(queryPayload, savePayload);
            await file?.move(Application_1.default.makePath('uploads'), {
                name: avatar.filename,
                overwrite: true
            });
            return avatar;
        });
        return { url: response.url };
    }
    async show({ params, response }) {
        return response.download(Application_1.default.makePath('uploads', params.file));
    }
}
exports.default = AvataLogoController;
//# sourceMappingURL=avataLogoController.js.map
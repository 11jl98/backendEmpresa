"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const uuid_1 = require("uuid");
class UsersController {
    async store({ request }) {
        const data = request.body();
        console.log('finalmente ta aqui', data);
        const user = await User_1.default.create({ login: data.login, password: data.password, rule: data.rule, id: uuid_1.v4() });
        return user;
    }
    async show({ params }) {
        const user = await User_1.default.findOrFail(params.id);
        return user;
    }
    async destroy({ params }) {
        const user = await User_1.default.findOrFail(params.id);
        user.delete();
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map
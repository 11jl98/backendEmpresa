"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async store({ request, auth }) {
        const data = request.body();
        console.log(data, 'chegou');
        const json = JSON.parse(data);
        console.log('ta aqui', json.login, json.password);
        const token = auth.attempt(json.login, json.password, {
            expiresIn: '30 days',
        });
        return token;
    }
    async destroy({ auth }) {
        auth.logout();
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map
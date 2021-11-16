"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../../../utils/api"));
class AuthController {
    async store({ request, auth }) {
        const data = request.body();
        const dadosGestao = {
            CNPJ: "03054436000151",
            SOFTWARE: 'Óptica',
            CHAVE: '9EB55AD66A50C42CC9A67E5DB68BB6A6'
        };
        try {
            const liberado = await api_1.default.post('Liberar/pode', dadosGestao);
            const data = liberado.data.ResSoft;
            if (data.BLOQUEADO === "SIM" || data.FIMUSO === "BLOQUEADO" || data.CHAVE === "BLOQUEADO") {
                return 'Você não pode acessar no momento, entre em contato com a BMS';
            }
        }
        catch (error) {
            return error;
        }
        console.log(data.login, data.password);
        const token = auth.attempt(data.login, data.password, {
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
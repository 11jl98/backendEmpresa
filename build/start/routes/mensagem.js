"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('/mensagem', 'MensagensController.store');
Route_1.default.get('/mensagem', 'MensagensController.index');
Route_1.default.get('/mensagem/:page', 'MensagensController.paginateMensagens');
//# sourceMappingURL=mensagem.js.map
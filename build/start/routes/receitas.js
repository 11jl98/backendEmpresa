"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/receitas', 'ReceitasController.index');
Route_1.default.get('/receitas/:id', 'ReceitasController.show');
Route_1.default.get('/receitas/:dataInit/:dataFinal', 'ReceitasController.showDate');
Route_1.default.post('/receitas', 'ReceitasController.store');
Route_1.default.put('/receitas/:id', 'ReceitasController.update');
Route_1.default.delete('/receitas/:id', 'ReceitasController.destroy');
//# sourceMappingURL=receitas.js.map
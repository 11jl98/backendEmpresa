"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/propriedade/schema/:id', 'PropriedadesController.index');
Route_1.default.get('/propriedade/:id/:page', 'PropriedadesController.indexInit');
Route_1.default.get('/propriedade/:id', 'PropriedadesController.show');
Route_1.default.post('/propriedade', 'PropriedadesController.store');
Route_1.default.put('/propriedade/:id', 'PropriedadesController.update');
Route_1.default.delete('/propriedade/:id', 'PropriedadesController.destroy');
//# sourceMappingURL=propriedade.js.map
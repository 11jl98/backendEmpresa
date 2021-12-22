"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('/empresa', 'EmpresasController.store');
Route_1.default.put('/empresa/:id', 'EmpresasController.update');
Route_1.default.get('/empresa', 'EmpresasController.index');
Route_1.default.put('/empresa/avatar/logo', 'avataLogoController.update');
Route_1.default.get('/uploads/:file', 'avataLogoController.show');
//# sourceMappingURL=empresa.js.map
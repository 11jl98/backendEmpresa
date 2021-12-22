"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/inventario/relatorio/gerar/:filtro/:texto', 'InventarioestoquesController.index');
Route_1.default.get('/inventario/quantidade/lote', 'InventarioestoquesController.indexLote');
Route_1.default.get('/inventario/list', 'InventarioestoquesController.show');
Route_1.default.get('/inventario/list/:dataInit/:dataFinal', 'InventarioestoquesController.showDate');
Route_1.default.post('/inventario/:page', 'MovimentaestoquesController.indexInventario');
//# sourceMappingURL=inventario.js.map
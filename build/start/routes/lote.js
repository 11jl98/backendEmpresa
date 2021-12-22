"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/lote/schema/:idAgrotoxico/:embalagem/:capacidadeembalagem/:unidademmbalagem', 'LotesController.index');
Route_1.default.get('/lote/schema/:idAgrotoxico/:embalagem/:capacidadeembalagem/:unidademmbalagem/:numlote', 'LotesController.indexNum');
Route_1.default.get('/lote/:id', 'LotesController.show');
Route_1.default.post('/lote', 'LotesController.store');
Route_1.default.put('/lote/:id', 'LotesController.update');
Route_1.default.delete('/lote/:id', 'LotesController.destroy');
//# sourceMappingURL=lote.js.map
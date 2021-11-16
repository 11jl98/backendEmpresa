"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
class InventarioestoquesController {
    async index({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const estoque = await Movimentaestoque_1.default.query().
            where('id_empresa', '=', id);
        const est = estoque.reduce((acc, current) => {
            let nomeEmbalagem = current.nomeembalagem + '-' + current.tipoembalagem + '-' + current.unidademmbalagem;
            acc[current.nomeagrotoxico] = acc[current.nomeagrotoxico] || {};
            acc[current.nomeagrotoxico][nomeEmbalagem] = acc[current.nomeagrotoxico][nomeEmbalagem] || {};
            acc[current.nomeagrotoxico][nomeEmbalagem]['quantidade'] = acc[current.nomeagrotoxico][nomeEmbalagem]['quantidade'] || 0;
            acc[current.nomeagrotoxico][nomeEmbalagem]['quantidade'] += Number(current.quantidade);
            return acc;
        }, {});
        return est;
    }
    async show({}) {
        const estoque = await Movimentaestoque_1.default.all();
        const est = estoque.reduce((acc, current) => {
            acc['entrada'] = acc['entrada'] || [];
            acc['saida'] = acc['saida'] || [];
            if (current.tipomovimentacao === 'COMPRA' || current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA' || current.tipomovimentacao === 'INVENTARIO-ENTRADA') {
                acc['entrada'].push(current);
            }
            else if (current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA' || current.tipomovimentacao === 'DEVOLUCAO') {
                acc['saida'].push(current);
            }
            return acc;
        }, {});
        return est;
    }
    async showDate({ params }) {
        const estoque = await Movimentaestoque_1.default.query()
            .where('data', '>=', params.dataInit)
            .andWhere('data', '<=', params.dataFinal);
        const est = estoque.reduce((acc, current) => {
            acc['entrada'] = acc['entrada'] || [];
            acc['saida'] = acc['saida'] || [];
            if (current.tipomovimentacao === 'COMPRA' || current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA' || current.tipomovimentacao === 'INVENTARIO-ENTRADA') {
                acc['entrada'].push(current);
            }
            else if (current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA' || current.tipomovimentacao === 'DEVOLUCAO' || current.tipomovimentacao === 'INVENTARIO-SAIDA') {
                acc['saida'].push(current);
            }
            return acc;
        }, {});
        return est;
    }
}
exports.default = InventarioestoquesController;
//# sourceMappingURL=InventarioestoquesController.js.map
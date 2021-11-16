"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
class PropriedadesRepositories {
    static async storeMovReceita(data, idEmpresa, uuid) {
        const movimentaestoque = await Movimentaestoque_1.default.create({
            ...data,
            tipomovimentacao: 'VENDA',
            idEstoque: uuid,
            idEmpresa: idEmpresa,
        });
        return movimentaestoque;
    }
    static async indexInit(page, idEmpresa) {
        const movimentaestoque = await Movimentaestoque_1.default.query()
            .select(['id_estoque', 'id_fornecedor', 'numerocontrole', 'data', 'datavencimento', 'datanfe', 'embalagemindea',
            'enviado', 'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'id_embalagem', 'nomeresponsaveltecnico',
            'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
            .where('id_empresa', '=', idEmpresa)
            .paginate(page, 5);
        return movimentaestoque;
    }
    static async indexByParams(texto, filtro, page, idEmpresa) {
        const movimentaestoque = await Movimentaestoque_1.default.query()
            .select(['id_estoque', 'id_fornecedor', 'numerocontrole', 'data', 'datavencimento', 'datanfe', 'embalagemindea',
            'enviado', 'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'id_embalagem', 'nomeresponsaveltecnico',
            'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return movimentaestoque;
    }
    static async indexByDate(dataInit, dataFinal, page, idEmpresa) {
        const movimentaestoque = await Movimentaestoque_1.default.query()
            .select(['id_estoque', 'id_fornecedor', 'numerocontrole', 'data', 'datavencimento', 'datanfe', 'embalagemindea',
            'enviado', 'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'id_embalagem', 'nomeresponsaveltecnico',
            'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)
            .paginate(page, 5);
        return movimentaestoque;
    }
    static async indexByParamsDate(texto, filtro, dataInit, dataFinal, page, idEmpresa) {
        const movimentaestoque = await Movimentaestoque_1.default.query()
            .select(['id_estoque', 'id_fornecedor', 'numerocontrole', 'data', 'datavencimento', 'datanfe', 'embalagemindea',
            'enviado', 'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'id_embalagem', 'nomeresponsaveltecnico',
            'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5);
        return movimentaestoque;
    }
    static async inventario(dados, page, idEmpresa) {
        const movimentaestoque = await Movimentaestoque_1.default.query()
            .sum('quantidade as quantidade')
            .select(['id_estoque',
            'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('nomeembalagem', '=', dados.nomeembalagem)
            .andWhere('tipoembalagem', '=', dados.tipoembalagem)
            .andWhere('unidademmbalagem', '=', dados.unidademmbalagem)
            .paginate(page, 5);
        return movimentaestoque[0];
    }
}
exports.default = PropriedadesRepositories;
//# sourceMappingURL=MovimentaestoqueRepo.js.map
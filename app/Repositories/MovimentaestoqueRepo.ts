import Movimentaestoque from "App/Models/Movimentaestoque";

export default class PropriedadesRepositories {

static async indexInit(page, idEmpresa){

    const movimentaestoque = await Movimentaestoque.query()
    .select(['id_estoque','id_fornecedor', 'data', 'datavencimento', 'datanfe',  'embalagemindea',
     'enviado', 'nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 
    'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
    .where('id_empresa', '=', idEmpresa)
    .paginate(page, 5)
    console.log(movimentaestoque)
      
    return movimentaestoque
}

static async indexByParams(texto, filtro, page, idEmpresa){

    const movimentaestoque = await Movimentaestoque.query()
    .select(['id_estoque','id_fornecedor', 'data', 'datavencimento', 'datanfe',  'embalagemindea',
     'enviado', 'nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 
    'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
    .where('id_empresa', '=', idEmpresa)
    .andWhere(filtro, 'like', `%${texto}%`)
    .orderBy(filtro, 'asc')
    .paginate(page, 5)
    
console.log(movimentaestoque)

return movimentaestoque
}

static async indexByParamsDate(texto, filtro, dataInit, dataFinal, page, idEmpresa){

    const movimentaestoque = await Movimentaestoque.query()
    .select(['id_estoque','id_fornecedor', 'data', 'datavencimento', 'datanfe',  'embalagemindea',
     'enviado', 'nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 
    'tipomovimentacao', 'json', 'notafiscal', 'numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox', 'serie', 'statussc',])
    .where('id_empresa', '=', idEmpresa)
    .andWhere(filtro, 'like', `%${texto}%`)
    .andWhere('data', '>=', dataInit)
    .andWhere('data', '<=', dataFinal)
    .orderBy(filtro, 'asc')
    .paginate(page, 5)
    
console.log(movimentaestoque)

return movimentaestoque
}

}
import Receitas from 'App/Models/Receita'
import Infortecnica from 'App/Models/Infortecnica'

export default class ReceitaRepositories {

    static async index(texto, filtro, page, idEmpresa) {
        const receitas = await Receitas.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5)
        return receitas
    }


    static async indexPaginate(page, idEmpresa) {
        const receitas = await Receitas.query().select(['id_receita','id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato','nomecliente', 'nomeresponsavel'])
            .where('id_empresa', '=', idEmpresa)
            .preload('cliente')
            .preload('responsavel')
            .paginate(page, 5)

        return receitas
    }

    static async indexParamsDate(texto, filtro, dataInit, dataFinal, page, idEmpresa) {
        const propriedade = await Receitas.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)
            .orderBy(filtro, 'asc')
            .paginate(page, 5)
        return propriedade
    }
    static async indexDate(dataInit, dataFinal, page, idEmpresa) {
        const receitas = await Receitas.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)

            .paginate(page, 5)
        return receitas
    }
    static async show(idReceita) {
        const receitas = await Receitas.query().select().where('id_receita', '=',idReceita).first()
        return receitas
    }
    static async deleteInfoByReceita(idReceita,idEmpresa){
        const info = await Infortecnica.query().select()
        .where('id_receita', '=', idReceita)
        .andWhere('id_empresa', '=', idEmpresa)
        return info
    }
}



import Receitas from 'App/Models/Receita'
import Infortecnica from 'App/Models/Infortecnica'

export default class ReceitaRepositories {

    static async index(filtro: string,texto: string, page:number, idEmpresa:string) {
        const receitas = await Receitas.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .preload('cliente')
            .preload('responsavel')
            .paginate(page, 5)
        return receitas
    }


    static async indexPaginate(page:number, idEmpresa:string) {
        const receitas = await Receitas.query().select(['id_receita','id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato','nomecliente', 'nomeresponsavel'])
            .where('id_empresa', '=', idEmpresa)
            .preload('cliente')
            .preload('responsavel')
            .paginate(page, 5)

        return receitas
    }

    static async indexParamsDate(texto:string, filtro:string, dataInit:string, dataFinal:string, page:number, idEmpresa:string) {
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
    static async indexDate(dataInit:string, dataFinal:string, page:number, idEmpresa:string) {
        const receitas = await Receitas.query().select(['id_cliente', 'id_propriedade', 'id_responsavel', 'numeroreceita', 'numeroart',
            'data', 'nome', 'statusreceita', 'observacao', 'obsmip', 'notafiscal', 'serie', 'valor', 'datafinal', 'statussc', 'jsonsc', 'codretsc',
            'enviado', 'devolucao', 'cogoias', 'seriesc', 'complementoreceita', 'chavenfe', 'datanfe', 'protocolors', 'protocolocancelamentors', 'contrato'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('data', '>=', dataInit)
            .andWhere('data', '<=', dataFinal)

            .paginate(page, 5)
        return receitas
    }
    static async show(idReceita:string) {
        const receitas = await Receitas.query().select().where('id_receita', '=',idReceita).first()
        return receitas
    }
    static async deleteInfoByReceita(idReceita:string,idEmpresa:string){
        const info = await Infortecnica.query().select()
        .where('id_receita', '=', idReceita)
        .andWhere('id_empresa', '=', idEmpresa)
        return info
    }
    static async indexByArtResponsavel(art:string, id_responsavel:string, idEmpresa:string) {
        const receitas = await Receitas.query().select()
        .where('numeroart', '=', art)
        .andWhere('id_responsavel', '=', id_responsavel)
        .andWhere('id_empresa', '=', idEmpresa)
        .count('id_receita as total')

        return receitas
    }
    static async getReceitas(dataInit:string, dataFinal:string, idEmpresa:string) {
        const receitas = await Receitas.query().select()
        .where('id_empresa', '=', idEmpresa)
        .andWhere('data', '>=', dataInit)
        .andWhere('data', '<=', dataFinal)
        .count('id_receita as total')
        .groupBy('data')

        return receitas
    }
}



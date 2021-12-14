import Responsavel from 'App/Models/ResponsavelTecnico'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class ResponsavelRepositories {

    constructor(protected ctx: HttpContextContract) {
    }
    static async index(filtro, texto, page, idEmpresa) {
        const responsavel = await Responsavel.query()
            .select(['id_responsavel', 'nome', 'cpf', 'crea', 'endereco', 'bairro', 'numero', 'cidade', 'uf',
                'cep', 'telefone', 'email', 'receitasart', 'proximareceita', 'artatual',
                'observacao', 'profissao', 'tokensc', 'complementoreceita', 'seriesc', 'conselho', 'contrato' ,'codibge'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5)
        return responsavel

    }
    static async indexInit(page, idEmpresa) {
        const responsavel = await Responsavel.query()
            .select(['id_responsavel', 'nome', 'cpf', 'crea', 'endereco', 'bairro', 'numero', 'cidade', 'uf',
                'cep', 'telefone', 'email', 'receitasart', 'proximareceita', 'artatual',
                'observacao', 'profissao', 'tokensc', 'complementoreceita', 'seriesc', 'conselho', 'contrato','codibge'])
            .where('id_empresa', '=', idEmpresa)
            .paginate(page, 5)

        return responsavel

    }

    static async indexFindBySelect(idEmpresa) {
        const responsavel = await Responsavel.query().select(['id_responsavel', 'nome']).where('id_empresa', '=', idEmpresa)
        return responsavel
    }
}
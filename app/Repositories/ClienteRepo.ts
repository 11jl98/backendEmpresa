import Cliente from 'App/Models/Cliente'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PropriedadesRepositories {

    constructor(protected ctx: HttpContextContract) {
    }
    static async index(filtro, texto, page, idEmpresa) {
        const cliente = await Cliente.query()
            .select(['id_cliente', 'nome', 'cpfcnpj', 'endereco', 'bairro',
                'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'iepr', 'observacao', 'rgie'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5)

        return cliente

    }
    static async indexInit(page, idEmpresa) {
        const cliente = await Cliente.query()
    .select(['id_cliente', 'nome', 'cpfcnpj','endereco','bairro',
    'numero','cidade','uf','cep','telefone','email','iepr','observacao','rgie'])
    .where('id_empresa', '=', idEmpresa)
    .paginate(page, 5)
      
    return cliente

    }
}

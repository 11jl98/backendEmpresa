import Cliente from 'App/Models/Cliente'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Clienterepositories {

    constructor(protected ctx: HttpContextContract) {
    }
    static async index(filtro: string, texto: string, page: number, idEmpresa: string) {
        const cliente = await Cliente.query()
            .select(['id_cliente', 'nome', 'cpfcnpj', 'endereco', 'bairro',
                'numero', 'cidade', 'uf', 'cep', 'telefone', 'email', 'iepr', 'observacao', 'rgie', 'codibge'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere(filtro, 'like', `%${texto}%`)
            .orderBy(filtro, 'asc')
            .paginate(page, 5)

        return cliente

    }
    static async indexInit(page: number, idEmpresa: string) {
        const cliente = await Cliente.query()
    .select(['id_cliente', 'nome', 'cpfcnpj','endereco','bairro',
    'numero','cidade','uf','cep','telefone','email','iepr','observacao','rgie', 'codibge'])
    .where('id_empresa', '=', idEmpresa)
    .paginate(page, 5)
      
    return cliente

    }
    static async indexFindBySelectSicca(idEmpresa: string, idCliente: string) {
        const cliente = await Cliente.query().select(['nome', 'cpfcnpj', 'endereco','bairro','numero', 'codibge'])
        .where('id_empresa', '=', idEmpresa)
        .andWhere('id_cliente', '=', idCliente).first()
        return cliente
    }
}

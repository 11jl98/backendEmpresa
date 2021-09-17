import Propriedade from 'App/Models/Propriedade'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PropriedadesRepositories {

    constructor(protected ctx: HttpContextContract) {
	}
    static async indexInit(idCliente, idEmpresa){
        const propriedade = await Propriedade.query().select(['id_propriedade', 'nomepropriedade', 'cidade'])
        .where('id_cliente', '=', idCliente)
        .andWhere('id_empresa', '=', idEmpresa)
        return propriedade

    }
    static async show(idPropriedade, idEmpresa){
        const propriedade = await Propriedade.query().select(['id_propriedade','id_empresa',
        'id_cliente','nomepropriedade','endereco','bairro','numero','cidade',
        'uf','cep','cnpj','email','latitude','longitude','telefone','iepr',])
        .where('id_propriedade', '=',idPropriedade)
        .andWhere('id_empresa', '=', idEmpresa)
        return propriedade
    }
}

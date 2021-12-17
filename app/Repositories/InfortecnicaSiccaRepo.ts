import Infortecnica from 'App/Models/Infortecnica'


export default class InfortecnicaRepositories {

    static async index(idInfortecnica, idEmpresa) {
        const info = await Infortecnica.query()
        .where('id_empresa','=',idEmpresa)
        .andWhere('id_infortecnica','=', idInfortecnica)
        .first()
        return info

    }

    static async indexByReceita(idReceita, idEmpresa) {
        const info = await Infortecnica.query()
        .where('id_empresa','=',idEmpresa)
        .andWhere('id_receita','=', idReceita)
        
        return info

    }
}

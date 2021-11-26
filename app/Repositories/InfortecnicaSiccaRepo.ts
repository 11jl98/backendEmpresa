import Infortecnica from 'App/Models/Infortecnica'


export default class LoteRepositories {

    static async index(idInfortecnica, idEmpresa) {
        const info = await Infortecnica.query()
        .where('id_empresa','=',idEmpresa)
        .andWhere('id_infortecnica','=', idInfortecnica)
        .first()
        return info

    }
}

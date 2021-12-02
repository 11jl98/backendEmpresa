import Lote from 'App/Models/Lote'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoteRepositories {

    constructor(protected ctx: HttpContextContract) {
    }
    static async index(idAgrotoxico, embalagem, capacidadeEmbalagem, unidadeEmbalagem, idEmpresa) {
        const lotes = await Lote.query()
            .select(['id_lote','numlote', 'datavencimento'])
            .where('id_empresa', '=', idEmpresa)
            .where('id_agrotoxico', '=', idAgrotoxico)
            .andWhere('embalagem', '=',  embalagem.trim() )
            .andWhere('capacidadeembalagem', '=', capacidadeEmbalagem.trim())
            .andWhere('unidadeembalagem', '=', unidadeEmbalagem.trim())

        return lotes

    }
    static async indexNum(idAgrotoxico, embalagem, capacidadeEmbalagem, unidadeEmbalagem, numlote, idEmpresa) {
        const lotes = await Lote.query()
            .select(['id_lote','numlote', 'datavencimento'])
            .where('id_empresa', '=', idEmpresa)
            .where('id_agrotoxico', '=', idAgrotoxico)
            .andWhere('embalagem', '=',  embalagem.trim() )
            .andWhere('capacidadeembalagem', '=', capacidadeEmbalagem.trim())
            .andWhere('unidadeembalagem', '=', unidadeEmbalagem.trim())
            .andWhere('numlote', '=', numlote.trim())

        return lotes

    }
}

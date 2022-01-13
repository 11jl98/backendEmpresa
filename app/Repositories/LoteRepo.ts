import Lote from 'App/Models/Lote'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoteRepositories {

    constructor(protected ctx: HttpContextContract) {
    }
    static async index(idAgrotoxico:number, embalagem:string, capacidadeEmbalagem:string, unidadeEmbalagem:string, idEmpresa:string) {
        const lotes = await Lote.query()
            .select(['id_lote','numlote', 'datavencimento'])
            .where('id_empresa', '=', idEmpresa)
            .where('id_agrotoxico', '=', idAgrotoxico)
            .andWhere('embalagem', '=',  embalagem.trim() )
            .andWhere('capacidadeembalagem', '=', capacidadeEmbalagem.trim())
            .andWhere('unidadeembalagem', '=', unidadeEmbalagem.trim())

        return lotes

    }
    static async indexNum(idAgrotoxico:number, embalagem:string, capacidadeEmbalagem:string, unidadeEmbalagem:string, numlote:string, idEmpresa:string) {
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
    static async LoteAvencer(dataInit:string,dataFinal:string, idEmpresa:string) {
        const lotes = await Lote.query()
            .select(['id_lote','nomeagrotoxico','numlote', 'datavencimento', 'embalagem','capacidadeembalagem','unidadeembalagem'])
            .where('id_empresa', '=', idEmpresa)
            .andWhere('datavencimento', '>=', dataInit)
            .andWhere('datavencimento', '<=', dataFinal)
            .count('id_lote as total')
            .groupBy('id_lote')
            .orderBy('datavencimento')
        return lotes

    }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Infortecnica from 'App/Models/Infortecnica'
import InfortecnicaValidator from 'App/Validators/InfortecnicaValidator'
import MovimentaestoqueRepo from 'App/Repositories/MovimentaestoqueRepo'
import Movimentaestoque from 'App/Models/Movimentaestoque'

import {v4 as uuid} from 'uuid'

export default class InfortecnicaReceitasController {

  public async index ({params, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const infortecnica = await Infortecnica.query().select()
    .where('id_empresa','=',id)
    .andWhere('id_infortecnica','=', params.idInfo)
    .andWhere('id_agrotoxico','=', params.idAgrotoxico)

    return infortecnica
  }


  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const Uuid = uuid()

    const data = await request.validate(InfortecnicaValidator)
    console.log(data)
    const info = await Infortecnica.create({
      ...data,
      idEmpresa: id,
      idInfortecnica: Uuid
    })
    info.idInfortecnica = Uuid
    await info.preload('receita')
    const quantidade = parseFloat(info.quantembal)
    const movEstoque ={
      id_infortecnica: info.idInfortecnica,
      data:info.receita.data,
      datanfe: info.receita.datanfe,
      nomeagrotoxico: info.nomeagrotoxico,
      nomeembalagem: info.nomeembalagem,
      tipoembalagem: info.tipoembalagem,
      unidademmbalagem: info.unidademmbalagem,
      nomeresponsaveltecnico:info.receita.nome,
      tipomovimentacao:'VENDA',
      notafiscal:info.receita.notafiscal,
      numlote:info.lote,
      quantidade: (-quantidade),
      receita:info.receita.numeroreceita,
      registroagrotox:info.registroagrotoxico,
      serie:info.receita.serie, 
    }
    await MovimentaestoqueRepo.storeMovReceita(movEstoque, id, Uuid)
    console.log('ta aqui ',info)
    return info
  }

  public async show ({params, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const info = await Infortecnica.query().where('id_empresa','=',id).andWhere('id_receita','=', params.id)
    return info
  }

  public async update ({request, params}: HttpContextContract) {
    const info = await Infortecnica.findOrFail(params.id)
    const data = await request.validate(InfortecnicaValidator)

    info.merge(data)
    await info.save()
    return info
  }

  public async destroy ({params}: HttpContextContract) {
    const info = await Infortecnica.findOrFail(params.id)
    await info.delete()

    const estoque = await Movimentaestoque.findOrFail(params.id)
    await estoque.delete()
  }
}

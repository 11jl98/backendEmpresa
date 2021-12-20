import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lote from 'App/Models/Lote'
import LoteValidator from 'App/Validators/LoteValidator'
import LoteRepo from 'App/Repositories/LoteRepo'
import {v4 as uuid} from 'uuid'

export default class LotesController {
  public async index ({params, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const id_agrotoxico = params.idAgrotoxico
    let embalagem = params.embalagem
    let unidademmbalagem = params.unidademmbalagem
    let capacidadeembalagem = params.capacidadeembalagem

    embalagem = decodeURIComponent(embalagem)
    

    const lotes = await LoteRepo.index(id_agrotoxico, embalagem, capacidadeembalagem, unidademmbalagem, id)
    
    return lotes
  }
  public async indexNum ({params, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const id_agrotoxico = params.idAgrotoxico
    let embalagem = params.embalagem
    let unidademmbalagem = params.unidademmbalagem
    let capacidadeembalagem = params.capacidadeembalagem
    let numlote = params.numlote

    embalagem = decodeURIComponent(embalagem)
    

    const lotes = await LoteRepo.indexNum(id_agrotoxico, embalagem, capacidadeembalagem, unidademmbalagem,numlote, id)
    
    return lotes
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(LoteValidator.LoteValidatorStore)
    const lote = await Lote.create({
       idEmpresa: id,
        ...data,
        idLote: uuid()
      })
    return lote
  }

  public async show ({params}: HttpContextContract) {
    const lote = Lote.findOrFail(params.id)
    return lote
  }

  public async update ({request, params}: HttpContextContract) {
    const lote = await Lote.findOrFail(params.id)
    const data = await request.validate(LoteValidator.LoteValidatorUpdate)

    lote.merge(data)
    await lote.save()
    return lote

  }

  public async destroy ({params}: HttpContextContract) {
    const lote = await Lote.findOrFail(params.id)
    await lote.delete()
  }
}

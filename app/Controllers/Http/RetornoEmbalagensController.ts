import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RetornoEmbalagens from 'App/Models/RetornoEmbalagen'

export default class RetornoEmbalagensController {
  public async index ({}: HttpContextContract) {
    const retorno = await RetornoEmbalagens.all()
    return retorno
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const data = request.only(['id_cliente','data','embdevolvidas','nomecliente','nomeembalagem','nomeagrotoxico',
      'registroagrotoxico','numeronf','numeroreceita','quantidadesaida','observacao'])

    const retorno = await RetornoEmbalagens.create({
      idEmpresa:id,
      ...data
    })
    return retorno
  }

  public async show ({params}: HttpContextContract) {
    const retorno = await RetornoEmbalagens.findOrFail(params.id)
    return retorno
  }

  public async update ({params, request}: HttpContextContract) {
    const retorno = await RetornoEmbalagens.findOrFail(params.id)
    const data = await request.only(['id_cliente','data','embdevolvidas','nomecliente','nomeembalagem','nomeagrotoxico',
    'registroagrotoxico','numeronf','numeroreceita','quantidadesaida','observacao'])

    retorno.merge(data)
    await retorno.save
    return retorno
  }

  public async destroy ({params}: HttpContextContract) {
    const retorno = await RetornoEmbalagens.findOrFail(params.id)
    await retorno.delete()
  }
}

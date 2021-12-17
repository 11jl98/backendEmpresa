import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Config from 'App/Models/Configuracao'
import ConfiguracaoValidator from 'App/Validators/ConfiguracaoValidator'
import {v4 as uuid} from 'uuid'

export default class ConfiguracaosController {
  public async index ({auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const config = await Config.query().select(['estoquenegativo', 'id_config','modeloreceita', 'quantidadeprodutoreceita' ]).where('id_empresa','=', id)
    
    return config
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const Uuid = uuid()

    const data = await request.validate(ConfiguracaoValidator)
    const config = await Config.create({
      idEmpresa: id,
      idConfig: Uuid,
      ...data
    })
    config.idConfig = Uuid

    return config
  }

  public async update ({params, request}: HttpContextContract) {
    const config = await Config.findOrFail(params.id)

    const data = await request.validate(ConfiguracaoValidator)
    config.merge(data)
    await config.save()
    return config
  }
}

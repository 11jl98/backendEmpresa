import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Responsavel from 'App/Models/ResponsavelTecnico'
import ResponsavelValidator from 'App/Validators/ResponsavelValidator'
import {v4 as uuid} from 'uuid'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ResponsavelTecnicosController {
  public async index ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const page = request.input('page', 1)
    const responsavel = await await Database.from('responsavel_tecnicos').paginate(page, 5)
    return responsavel
  }

  public async indexFindBySelect ({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const responsavel = await Responsavel.query().select(['id_responsavel', 'nome']).where('id_empresa', '=', id )
    return responsavel
  }
  
  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(ResponsavelValidator.ResponsavelValidatorStore)
    const responsavel = await Responsavel.create({
      ...data,
      idEmpresa: id,
      idResponsavel: uuid()
    })
    return responsavel
  }

  public async show ({ params }: HttpContextContract) {
    const responsavel = await Responsavel.findOrFail(params.id)
    return responsavel
  }

  public async update ({ params, request }: HttpContextContract) {
    const responsavel = await Responsavel.findOrFail(params.id)
    const data = await request.validate(ResponsavelValidator.ResponsavelValidatorUpdate)

    responsavel.merge(data)
    await responsavel.save()
    return responsavel
  }

  public async destroy ({ params }: HttpContextContract) {
    const responsavel = await Responsavel.findOrFail(params.id)
    responsavel.delete()
  }
}

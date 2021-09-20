import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Responsavel from 'App/Models/ResponsavelTecnico'
import ResponsavelRepo from 'App/Repositories/ResponsavelRepo'
import ResponsavelValidator from 'App/Validators/ResponsavelValidator'
import {v4 as uuid} from 'uuid'

export default class ResponsavelTecnicosController {
  public async index ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    let texto = params.texto 
    let filtro  = params.filtro
    
    texto = decodeURIComponent(texto)

    const responsavel = await ResponsavelRepo.index(filtro, texto, page, id)
      
    return responsavel
  }
  public async indexInit ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 

    const responsavel = await ResponsavelRepo.indexInit(page, id)
      
    return responsavel
  }

  public async indexFindBySelect ({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const responsavel = await ResponsavelRepo.indexFindBySelect(id)
    return responsavel
  }
  
  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const Uuid = uuid()
    const data = await request.validate(ResponsavelValidator.ResponsavelValidatorStore)
    const responsavel = await Responsavel.create({
      ...data,
      idEmpresa: id,
      idResponsavel: Uuid
    })
    responsavel.idResponsavel = Uuid
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
    return responsavel
  }
}

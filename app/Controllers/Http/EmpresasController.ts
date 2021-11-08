import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'
import EmpresaValidator from 'App/Validators/EmpresaValidator'
import {v4 as uuid} from 'uuid'

export default class EmpresasController {
  public async index ({auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const empresa = await Empresa.query().select().where('id_empresa','=', id)
    console.log(empresa)
    return empresa

  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const Uuid = uuid()
    const data = await request.validate(EmpresaValidator.EmpresaValidatorStore)

    const empresa = await Empresa.create({
      idEmpresa: id,
      idCadastro: Uuid,
      ...data
    })
    empresa.idCadastro = Uuid
    return empresa
  }

  public async show ({params}: HttpContextContract) {
    const empresa = await Empresa.findOrFail(params.id)
    return empresa

  }

  public async update ({request, params}: HttpContextContract) {
    const empresa = await Empresa.findOrFail(params.id)
    const data = await request.validate(EmpresaValidator.EmpresaValidatorUpdate)
    empresa.merge(data)
    await empresa.save()
    return empresa

  }

  public async destroy ({params}: HttpContextContract) {
    const empresa = await Empresa.findOrFail(params.id)
    await empresa.delete()
  }
}

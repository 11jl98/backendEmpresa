import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'
import EmpresaValidator from 'App/Validators/EmpresaValidator'

export default class EmpresasController {

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    console.log('chegou aqui')
    const data = await request.validate(EmpresaValidator.EmpresaValidatorStore)
    console.log('chegou aqui')

    const empresa = await Empresa.create({
      idEmpresa: id,
      ...data
    })
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

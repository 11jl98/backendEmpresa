import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Receitas from 'App/Models/Receita'
import ReceitasValidtor from 'App/Validators/ReceitaValidator'
export default class ReceitasController {
  public async index ({}: HttpContextContract) {
    const receitas = await Receitas.all()
    return receitas
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const data = await request.validate(ReceitasValidtor.ReceitaValidatorStore)
    const receitas = await Receitas.create({
      ...data,
      idEmpresa: id,
    })
    return receitas
  }

  public async show ({params}: HttpContextContract) {
    const receitas = await Receitas.findOrFail(params.id)
    await receitas.preload('cliente')
    await receitas.preload('propriedade')
    await receitas.preload('responsavel')
    return receitas
  }

  public async update ({params, request}: HttpContextContract) {
    const receitas = await Receitas.findOrFail(params.id)
       const data = await request.validate(ReceitasValidtor.ReceitaValidatorUpdate)

    receitas.merge(data)
    await receitas.save()
    await receitas.preload('cliente')
    await receitas.preload('propriedade')
    await receitas.preload('responsavel')
    return receitas
  }

  public async destroy ({params}: HttpContextContract) {
    const receitas = await Receitas.findOrFail(params.id)
    receitas.delete()
  }
}

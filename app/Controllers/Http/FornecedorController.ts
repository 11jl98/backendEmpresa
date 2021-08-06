import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'
import FornecedorValidator from 'App/Validators/FornecedorValidator'

export default class FornecedorController {
  public async index ({ }: HttpContextContract) {
    const fornecedor = await Fornecedor.all()
    return fornecedor
  }
  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()

    const id = user.id

    const data = await request.validate(FornecedorValidator.FornecedorValidatorStore)

    const fornecedor = await Fornecedor.create({
      ...data,
      idEmpresa: id,
    })

    return fornecedor
  }

  public async show ({ params }: HttpContextContract) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    return fornecedor
  }

  public async update ({ params, request }: HttpContextContract) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    const data = await request.validate(FornecedorValidator.FornecedorValidatorUpdate)
    fornecedor.merge(data)
    await fornecedor.save()
    return fornecedor
  }

  public async destroy ({ params }: HttpContextContract) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    await fornecedor.delete()
  }
}

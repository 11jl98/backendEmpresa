import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import ClienteVaidator from 'App/Validators/ClienteValidator'

export default class ClientesController {
  public async index ({ }: HttpContextContract) {
    const cliente = await Cliente.all()
    return cliente
  }
  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(ClienteVaidator.ClienteValidatorStore)
      
    const cliente = await Cliente.create({idEmpresa: id, ...data })

    return cliente
  }

  public async show ({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    return cliente
  }

  public async update ({ request, params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    const data = await request.validate(ClienteVaidator.ClienteValidatorUpdate)
      
    console.log(data, 'chegouuuuuu aqui')

    cliente.merge(data)
    await cliente.save
    return cliente
  }

  public async destroy ({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    await cliente.delete()
  }
}

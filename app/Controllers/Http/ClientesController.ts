import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import ClienteRepo from 'App/Repositories/ClienteRepo'
import ClienteVaidator from 'App/Validators/ClienteValidator'
import {v4 as uuid} from 'uuid'
export default class ClientesController {

  public async index ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    let texto = params.texto 
    let filtro  = params.filtro
    
    texto = decodeURIComponent(texto)


    const cliente = await ClienteRepo.index(filtro, texto, page, id)
      
    return cliente
  }
  public async indexInit ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    

    const cliente = await ClienteRepo.indexInit(page, id)

    return cliente
  }

  public async indexFindByCliente ({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const cliente = await Cliente.query().select(['id_cliente', 'nome'])
     .where('id_empresa', '=', id )
    return cliente
    
  }
  
  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(ClienteVaidator.ClienteValidatorStore)
    const Uuid = uuid()
    const cliente = await Cliente.create({
      idEmpresa: id,
      idCliente: Uuid,
      ...data 
    })
    console.log(cliente)
    cliente.idCliente = Uuid

    return cliente
  }

  public async show ({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    return cliente
  }

  public async update ({ request, params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    const data = await request.validate(ClienteVaidator.ClienteValidatorUpdate)
      
    cliente.merge(data)
    await cliente.save()
    console.log(cliente)
    return cliente
  }

  public async destroy ({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    await cliente.delete()
    return cliente
  }
}

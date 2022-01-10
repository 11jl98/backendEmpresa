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
    const cliente = await ClienteRepo.indexFindByCliente(id)
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
    cliente.idCliente = Uuid

    return cliente
  }

  public async show ({ params }: HttpContextContract) {
    const cliente = await ClienteRepo.show(params.id)
    return cliente
  }

  public async update ({ request, params }: HttpContextContract) {
    const data = await request.validate(ClienteVaidator.ClienteValidatorUpdate)
    const cliente = await ClienteRepo.update(params.id, data)
    return cliente
  }

  public async destroy ({ params }: HttpContextContract) {
    await ClienteRepo.destroy(params.id)
  }
}

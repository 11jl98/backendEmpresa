import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'
import FornecedorValidator from 'App/Validators/FornecedorValidator'
import {v4 as uuid} from 'uuid'
import FornecedorRepo from 'App/Repositories/FornecedorRepo'
export default class FornecedorController {
  public async index ({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const fornecedor = await FornecedorRepo.indexFindBySelect(id)
    return fornecedor
  }
  public async indexInit({auth, params}:HttpContextContract){
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 

    const responsavel = await FornecedorRepo.indexInit(page, id)
      
    return responsavel
  }
  public async indexPaginate({auth, params}:HttpContextContract){
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    let texto = params.texto 
    let filtro  = params.filtro
    
    texto = decodeURIComponent(texto)

    const responsavel = await FornecedorRepo.indexPaginate(texto,filtro, page, id)
      
    return responsavel
  }

  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()

    const id = user.id
    const Uuid = uuid()
    const data = await request.validate(FornecedorValidator.FornecedorValidatorStore)

    const fornecedor = await Fornecedor.create({
      ...data,
      idEmpresa: id,
      idFornecedor: Uuid
    })
    fornecedor.idFornecedor = Uuid
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

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'
import MovimentaEtoqueValidator from 'App/Validators/MovimentaEtoqueValidator'
import MovimentaetoqueRepo from 'App/Repositories/MovimentaestoqueRepo'
import {v4 as uuid} from 'uuid'

export default class MovimentaestoquesController {
  public async index ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page = params.page
    const estoque = await MovimentaetoqueRepo.indexInit(page, id)
    return estoque
  }

  public async indexByParams ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page = params.page
    let texto = params.texto
    let filtro = params.filtro

    texto = decodeURIComponent(texto)
    const estoque = await MovimentaetoqueRepo.indexByParams(texto, filtro, page, id)
    return estoque
  }

  public async indexByParamsDate ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page = params.page
    let texto = params.texto
    let filtro = params.filtro
    let dataInit = params.dataInit
    let dataFinal = params.dataFinal

    texto = decodeURIComponent(texto)
    const estoque = await MovimentaetoqueRepo.indexByParamsDate(texto, filtro, dataInit, dataFinal, page, id)
    return estoque
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(MovimentaEtoqueValidator)
    console.log(data)
      if(data.tipomovimentacao === "VENDA" ||data.tipomovimentacao === "INVENTARIO-SAIDA" ||data.tipomovimentacao === "DEVOLUCAO" || data.tipomovimentacao === 'TRANSFERENCIA-SAIDA'){
        data.quantidade = -(data.quantidade)
      }
    const estoque = await Estoque.create({
      ...data,
      idEmpresa: id,
      idEstoque: uuid()
    })
    return estoque
  }

  public async show ({params}: HttpContextContract) {
    const estoque = await Estoque.findOrFail(params.id)
    return estoque
  }

  public async update ({params, request}: HttpContextContract) {
    const estoque = await Estoque.findOrFail(params.id)
    const data = await request.validate(MovimentaEtoqueValidator)
    
    if(data.tipomovimentacao === "VENDA" ||data.tipomovimentacao === "INVENTARIO-SAIDA" ||data.tipomovimentacao === "DEVOLUCAO" || data.tipomovimentacao === 'TRANSFERENCIA-SAIDA'){
      data.quantidade = -(data.quantidade)
    }
      
    estoque.merge(data)
    await estoque.save()
    return estoque
  }

  public async destroy ({params}: HttpContextContract) {
    const estoque = await Estoque.findOrFail(params.id)
    estoque.delete()
  }
}

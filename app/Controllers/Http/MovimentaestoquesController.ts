import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'
import MovimentaEtoqueValidator from 'App/Validators/MovimentaEtoqueValidator'
import MovimentaetoqueRepo from 'App/Repositories/MovimentaestoqueRepo'

import { v4 as uuid } from 'uuid'

export default class MovimentaestoquesController {
  public async index({ auth, params }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page = params.page
    const estoque = await MovimentaetoqueRepo.indexInit(page, id)
    return estoque
  }

  public async indexByParams({ auth, params }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page = params.page
    let texto = params.texto
    let filtro = params.filtro

    texto = decodeURIComponent(texto)
    const estoque = await MovimentaetoqueRepo.indexByParams(texto, filtro, page, id)
    return estoque
  }

  public async indexByDate({ auth, params }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page = params.page
    let dataInit = params.dataInit
    let dataFinal = params.dataFinal

    const estoque = await MovimentaetoqueRepo.indexByDate( dataInit, dataFinal, page, id)
    return estoque
  }
  public async indexByParamsDate({ auth, params }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let texto = params.texto
    let filtro = params.filtro
    let page = params.page
    let dataInit = params.dataInit
    let dataFinal = params.dataFinal

    const estoque = await MovimentaetoqueRepo.indexByParamsDate(texto, filtro, dataInit, dataFinal, page, id)
    return estoque
  }

  public async store({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(MovimentaEtoqueValidator)
    const teste = request.only(['data', 'datanfe', 'datavencimento'])

    if (data.tipomovimentacao === "VENDA" || data.tipomovimentacao === "INVENTARIO-SAIDA" || data.tipomovimentacao === "DEVOLUCAO" || data.tipomovimentacao === 'TRANSFERENCIA-SAIDA') {
      data.quantidade = -(data.quantidade)
    }
    const dataNow = teste.data.split('-')

    const dataNfe = teste.datanfe

    const datavencimento = teste.datavencimento

    if (dataNow[0].length !== 4) {
      return { message: "ano invalido" }
    }
    if (dataNow[1].length === 2) {
      if (dataNow[1] > 12 || dataNow[1] < 1) {
        return { message: "mês invalido" }
      }
    }
    if (dataNow[2].length === 2) {
      if (dataNow[2] > 31 || dataNow[2] < 1) {
        return { message: "dia invalido" }
      }
    }


    const estoque = await Estoque.create({
      ...data,
      data: teste.data,
      datanfe: dataNfe,
      datavencimento: datavencimento,
      idEmpresa: id,
      idEstoque: uuid()
    })
    console.log(typeof (estoque.data), estoque.data)
    return estoque
  }

  public async show({ params }: HttpContextContract) {
    const estoque = await Estoque.findOrFail(params.id)
    return estoque
  }

  public async update({ params, request }: HttpContextContract) {
    const estoque = await Estoque.findOrFail(params.id)

    const data = await request.validate(MovimentaEtoqueValidator)

    const teste = request.only(['data', 'datanfe', 'datavencimento'])

    if (data.tipomovimentacao === "VENDA" || data.tipomovimentacao === "INVENTARIO-SAIDA" || data.tipomovimentacao === "DEVOLUCAO" || data.tipomovimentacao === 'TRANSFERENCIA-SAIDA') {
      data.quantidade = -(data.quantidade)
    }
    const dataNow = teste.data.split('-')

    const dataNfe = teste.datanfe

    const datavencimento = teste.datavencimento

    if (dataNow[0].length !== 4) {
      return { message: "ano invalido" }
    }
    if (dataNow[1].length === 2) {
      if (dataNow[1] > 12 || dataNow[1] < 1) {
        return { message: "mês invalido" }
      }
    }
    if (dataNow[2].length === 2) {
      if (dataNow[2] > 31 || dataNow[2] < 1) {
        return { message: "dia invalido" }
      }
    }

    estoque.merge({
      ...data,
      data: teste.data,
      datanfe: dataNfe,
      datavencimento: datavencimento,
    })

    await estoque.save()
    return estoque
  }

  public async destroy({ params }: HttpContextContract) {
    const estoque = await Estoque.findOrFail(params.id)
    await estoque.delete()
  }






 // public async indexInventario({ params, request, auth }: HttpContextContract) {
  //   const user = await auth.authenticate()
  //   const id = user.id
  //   let page = params.page
  //   const dados = request.only(['nomeembalagem', 'tipoembalagem', 'unidadeembalagem'])

  //   console.log(dados)

  //   const inventario = await MovimentaetoqueRepo.inventario(dados, page, id)
  //   return inventario
  // }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'

export default class InventarioestoquesController {
  public async index({ }: HttpContextContract) {
    const estoque = await Estoque.all()
    const est = estoque.reduce((acc, current) => {
      acc[current.nomeagrotoxico] = acc[current.nomeagrotoxico] || {}
      acc[current.nomeagrotoxico][current.nomeembalagem] = acc[current.nomeagrotoxico][current.nomeembalagem] ||{}
      acc[current.nomeagrotoxico][current.nomeembalagem]['quantidade'] = acc[current.nomeagrotoxico][current.nomeembalagem]['quantidade']||0 

      acc[current.nomeagrotoxico][current.nomeembalagem]['quantidade'] += Number(current.quantidade)
      return acc
    }, {})
    return est
  }

  public async show({ }: HttpContextContract) {
    const estoque = await Estoque.all()
    console.log(estoque)

    const est = estoque.reduce((acc, current) => {
        acc['entrada'] = acc['entrada']|| []
        acc['saida'] = acc['saida'] || []

      if (current.tipomovimentacao === 'COMPRA' || current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA') {
        acc['entrada'].push(current)
      }
      else if( current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA'|| current.tipomovimentacao === 'DEVOLUCAO' ){
        acc['saida'].push(current)
      }
      return acc
    }, {})

    return est
  }
  
}

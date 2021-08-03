import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'

export default class InventarioestoquesController {
  public async index({ }: HttpContextContract) {
    const estoque = await Estoque.all()

    const est = estoque.reduce((acc, current) => {
      acc[current.nomeagrotoxico] = acc[current.nomeagrotoxico] || []
      acc[current.nomeagrotoxico].push(current.quantidade)
      return acc
    }, {})
      
    return est
  }

  public async show({ }: HttpContextContract) {
    const estoque = await Estoque.all()

    const est = estoque.reduce((acc, current) => {
        acc['entrada'] = acc['entrada']|| []
        acc['saida'] = acc['saida'] || []

      if (current.tipomovimentacao === 'ENTRADA') {
        acc['entrada'].push(current)
      }
      else {
        acc['saida'].push(current)
      }
      return acc
    }, {})

    return est
  }
}

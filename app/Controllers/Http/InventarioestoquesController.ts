import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'

export default class InventarioestoquesController {
  public async index({ auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const estoque = await Estoque.query().
    where('id_empresa','=', id)
    let count = 1
    
    const est = estoque.reduce((acc, current) => {
      let nomeEmbalagem = current.nomeembalagem + ' ' + current.tipoembalagem + ' '+  current.unidademmbalagem
      acc[current.nomeagrotoxico] = acc[current.nomeagrotoxico] || {}
      acc[current.nomeagrotoxico][nomeEmbalagem] = acc[current.nomeagrotoxico][nomeEmbalagem] ||{}
      acc[current.nomeagrotoxico][nomeEmbalagem]['quantidade'] = acc[current.nomeagrotoxico][nomeEmbalagem]['quantidade']||0 

      acc[current.nomeagrotoxico][nomeEmbalagem]['quantidade'] += Number(current.quantidade)
      acc[current.nomeagrotoxico][nomeEmbalagem]['indice'] = count
      count = count + 1
      return acc
    }, {})
    return est
  }
  public async indexLote({ auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const estoque = await Estoque.query().
    where('id_empresa','=', id)
    let count = 1
    
    const est = estoque.reduce((acc, current) => {
      let nomeEmbalagem = current.nomeembalagem + ' ' + current.tipoembalagem + ' '+  current.unidademmbalagem
      acc[current.nomeagrotoxico] = acc[current.nomeagrotoxico] || {}
      acc[current.nomeagrotoxico][nomeEmbalagem] = acc[current.nomeagrotoxico][nomeEmbalagem] ||{}
      if(current.numlote === null)current.numlote = "Sem lote"
      acc[current.nomeagrotoxico][nomeEmbalagem][current.numlote] = acc[current.nomeagrotoxico][current.numlote] ||{}
      acc[current.nomeagrotoxico][nomeEmbalagem][current.numlote]['quantidade'] = acc[current.nomeagrotoxico][nomeEmbalagem][current.numlote]['quantidade']||0 

      acc[current.nomeagrotoxico][nomeEmbalagem][current.numlote]['quantidade'] += Number(current.quantidade)
      acc[current.nomeagrotoxico][nomeEmbalagem][current.numlote]['indice'] = count
      count = count + 1
      return acc
    }, {})
    return est
  }
  public async show({ }: HttpContextContract) {
    const estoque = await Estoque.all()

    const est = estoque.reduce((acc, current) => {
        acc['entrada'] = acc['entrada']|| []
        acc['saida'] = acc['saida'] || []

      if (current.tipomovimentacao === 'COMPRA' || current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA'|| current.tipomovimentacao ==='INVENTARIO-ENTRADA') {
        acc['entrada'].push(current)
      }
      else if( current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA'|| current.tipomovimentacao === 'DEVOLUCAO' ){
        acc['saida'].push(current)
      }
      return acc
    }, {})

    return est
  }

  public async showDate({params}: HttpContextContract){
    const estoque = await Estoque.query()
    .where('data', '>=', params.dataInit)
    .andWhere('data', '<=', params.dataFinal)

    const est = estoque.reduce((acc, current) => {
        acc['entrada'] = acc['entrada']|| []
        acc['saida'] = acc['saida'] || []
  
      if (current.tipomovimentacao === 'COMPRA'|| current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA' || current.tipomovimentacao ==='INVENTARIO-ENTRADA') {
        acc['entrada'].push(current)
      }
      else if( current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA'|| current.tipomovimentacao === 'DEVOLUCAO'|| current.tipomovimentacao === 'INVENTARIO-SAIDA' ){
        acc['saida'].push(current)
      }
      return acc
    }, {})
    return est
  }
  
}

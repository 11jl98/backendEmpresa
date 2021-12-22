import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'
import Database from '@ioc:Adonis/Lucid/Database'

export default class InventarioestoquesController {
  public async index({ params, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id  

    const filtro = params.filtro
    let texto = params.texto

    texto = decodeURIComponent(texto)

    const dadosPesquisa = await Estoque
    .query()
    .select('numlote', 'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'datavencimento')
    .sum('quantidade as total')
    .where('id_empresa', '=', id)
    .andWhere(filtro, 'like', `%${texto}%`)
    .groupBy('numlote', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem')
    .orderBy('nomeagrotoxico')
        return dadosPesquisa

  }
  public async indexLote({ auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    
    const estoque = await Database.knexRawQuery(`select estoque.numlote, estoque.datavencimento,
    estoque.nomeagrotoxico, estoque.id_agrotoxico, estoque.nomeembalagem, estoque.tipoembalagem,
     estoque.unidademmbalagem, SUM(estoque.quantidade) as total from movimentaestoques as estoque,
      lotes as lote  where estoque.id_empresa = '${id}' and estoque.numlote = lote.numlote and estoque.id_agrotoxico = lote.id_agrotoxico
       and estoque.nomeembalagem = lote.embalagem and estoque.tipoembalagem = lote.capacidadeembalagem
        and estoque.unidademmbalagem = lote.unidadeembalagem GROUP BY numlote, estoque.nomeembalagem, estoque.tipoembalagem, estoque.unidademmbalagem` )
  
    console.log(estoque[0])
    return estoque[0]

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

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Movimentaestoque'
import {v4 as uuid} from 'uuid'

export default class MovimentaestoquesController {
  public async index ({}: HttpContextContract) {
    const estoque = await Estoque.all()
    return estoque
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = request.only(['idFornecedor', 'data', 'datavencimento', 'datanfe', 'dentroestado', 'embalagemindea',
      'enviado','nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 'tipomovimentacao',
      'json', 'naturezaoperacao', 'notafiscal','numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox',
      'serie', 'statussc'])
    
    if(data.tipomovimentacao === "ENTRADA"){
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
    const data = request.only(['idFornecedor', 'data', 'datavencimento', 'datanfe', 'dentroestado', 'embalagemindea',
      'enviado','nomeagrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'nomeresponsaveltecnico', 'tipomovimentacao',
      'json', 'naturezaoperacao', 'notafiscal','numlote', 'observacao', 'quantidade', 'receita', 'registroagrotox',
      'serie', 'statussc'])

      if(data.tipomovimentacao !== "SAIDA" ||data.tipomovimentacao !== "INVENTARIO-SAIDA" ||data.tipomovimentacao !== "DEVOLUCAO"){
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

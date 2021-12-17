import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Receitas from 'App/Models/Receita'
import ReceitasValidtor from 'App/Validators/ReceitaValidator'
import {v4 as uuid} from 'uuid'
import ReceitaRepo from 'App/Repositories/ReceitaRepo'
import Responsavel from 'App/Models/ResponsavelTecnico'

export default class ReceitasController {
  public async index ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    let texto = params.texto 
    let filtro  = params.filtro
    
    texto = decodeURIComponent(texto)

    const receitas = await ReceitaRepo.index(filtro, texto, page, id)
    return receitas
  }
  public async indexPaginate ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 

    const receitas = await ReceitaRepo.indexPaginate(page, id)
    return receitas
  }

  public async indexDate ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    let dataInit = params.dataInit
    let dataFinal = params.dataFinal

    const receitas = await ReceitaRepo.indexDate(dataInit, dataFinal,page, id)
    return receitas
  }

  public async indexParamsDate ({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let page= params.page 
    let dataInit = params.dataInit
    let dataFinal = params.dataFinal
    let texto = params.texto 
    let filtro  = params.filtro
    
    texto = decodeURIComponent(texto)

    const receitas = await ReceitaRepo.indexParamsDate(texto, filtro,dataInit, dataFinal,page, id)
    return receitas
  }

  public async indexByArtResponsavel({ auth, params}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    let art = params.art
    let id_responsavel = params.id
    
    const receitas = await ReceitaRepo.indexByArtResponsavel(art, id_responsavel, id)
    return receitas
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const Uuid = uuid()
    const data = await request.validate(ReceitasValidtor.ReceitaValidatorStore)
    const receitas = await Receitas.create({
      ...data,
      idEmpresa: id,
      idReceita: Uuid
    })
    const responsavel = await Responsavel.findOrFail(receitas.idResponsavel)
    responsavel.merge({
      proximareceita: String(parseInt(receitas.numeroreceita)  + 1)
    })
    await responsavel.save()
    receitas.idReceita = Uuid
    return receitas
  }

  public async show ({params}: HttpContextContract) {
    const receitas = await ReceitaRepo.show(params.id)

    await receitas?.preload('cliente')
    await receitas?.preload('propriedade')
    await receitas?.preload('responsavel')
    return receitas
  }


  public async update ({params, request}: HttpContextContract) {
    const receitas = await Receitas.findOrFail(params.id)
       const data = await request.validate(ReceitasValidtor.ReceitaValidatorUpdate)

    receitas.merge(data)
    await receitas.save()
    await receitas.preload('cliente')
    await receitas.preload('propriedade')
    await receitas.preload('responsavel')
    return receitas
  }

  public async destroy ({params, auth, response}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const receitas = await Receitas.findOrFail(params.id)
    const receitasInfo = await ReceitaRepo.deleteInfoByReceita(params.id, id)
    
    if(receitasInfo.length > 0 ){
      
      return response.status(409)
    }
    await receitas.delete() 
  }
}
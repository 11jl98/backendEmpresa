import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Receita from 'App/Models/Receita'

export default class InfortecnicaReceitas extends BaseModel {
  @column({ isPrimary: true })
  public idIfortecnica: number

  @column()
  public idEmpresa: number
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public idReceita: number
  @belongsTo(() => Receita, {foreignKey:'idReceita'})
  public receita: BelongsTo<typeof Receita>

  @column()
  public aplicacao: string

  @column()
  public areatratar: string

  @column()
  public classetoxico: string

  @column()
  public classificacaocultura: string

  @column()
  public codcultura: string

  @column()
  public concentracao: string

  @column()
  public dosagem: string

  @column()
  public epi: string

  @column()
  public epocaaplicacao: string

  @column()
  public estagiocultura: string

  @column()
  public fitoxidade: string

  @column()
  public formulacao: string

  @column()
  public horario: string

  @column()
  public nomeembalagem: string

  @column()
  public tipoembalagem: string

  @column()
  public unidademmbalagem: string

  @column()
  public indicacao: string

  @column()
  public ingredienteativo: string

  @column()
  public intervaloaplicacao: string

  @column()
  public intervaloentrada: string

  @column()
  public intervaloseguranca: string

  @column()
  public lote: string

  @column()
  public modaplicacao: string

  @column()
  public modoaplicacao: string

  @column()
  public nomeagrotoxico: string

  @column()
  public nomecultura: string

  @column()
  public nomeclasse: string

  @column()
  public nomeclasseambiental: string

  @column()
  public nomegrupoquimico: string

  @column()
  public numeroaplicacoes: string

  @column()
  public problemacientifico: string

  @column()
  public problemacomum: string

  @column()
  public quantembal: string

  @column()
  public quantidadeadquirir: string

  @column()
  public registroagrotoxico: string

  @column()
  public tipoaplicacao: string

  @column()
  public volumecalda: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class ResponsavelTecnico extends BaseModel {
  @column({ isPrimary: true })
  public idResponsavel: string

  @column()
  public idEmpresa: string
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public nome: string

  @column()
  public crea: string

  @column()
  public cpf: string

  @column()
  public endereco: string

  @column()
  public bairro: string

  @column()
  public numero: string

  @column()
  public cidade: string

  @column()
  public UF: string

  @column()
  public cep: string
  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public receitasart: string

  @column()
  public proximareceita: string

  @column()
  public artatual: string

  @column()
  public observacao: string

  @column()
  public profissao: string

  @column()
  public tokensc: string

  @column()
  public complementoreceita: string

  @column()
  public seriesc: string

  @column()
  public conselho: string

  @column()
  public contrato: string
  
  @column()
  public codibge: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

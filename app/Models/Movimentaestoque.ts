import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Fornecedor from 'App/Models/Fornecedor'

export default class Movimentaestoque extends BaseModel {
  @column({ isPrimary: true })
  public idEstoque: string

  @column()
  public idEmpresa: string
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public idFornecedor: string
  @belongsTo(() => Fornecedor, {foreignKey:'idFornecedor'})
  public fornecedor: BelongsTo<typeof Fornecedor>

  @column()
  public data: DateTime

  @column()
  public datavencimento: DateTime

  @column()
  public datanfe: DateTime


  @column()
  public embalagemindea: string

  @column()
  public enviado: string

  @column()
  public nomeagrotoxico: string

  @column()
  public nomeembalagem: string

  @column()
  public tipoembalagem: string

  @column()
  public unidademmbalagem: string

  @column()
  public nomeresponsaveltecnico: string

  @column()
  public tipomovimentacao: string

  @column()
  public json: string


  @column()
  public notafiscal: string

  @column()
  public numlote: string

  @column()
  public observacao: string

  @column()
  public quantidade: number

  @column()
  public receita: string

  @column()
  public registroagrotox: string

  @column()
  public serie: string

  @column()
  public statussc: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

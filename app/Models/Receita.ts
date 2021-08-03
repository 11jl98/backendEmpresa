import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Cliente from 'App/Models/Cliente'
import Propriedade from 'App/Models/Propriedade'
import Responsavel from 'App/Models/ResponsavelTecnico'

export default class Receita extends BaseModel {
  @column({ isPrimary: true })
  public idReceita: number

  @column()
  public idEmpresa: number
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public idCliente: number
  @belongsTo(() => Cliente, {foreignKey:'idCliente'})
  public cliente: BelongsTo<typeof Cliente>

  @column()
  public idPropriedade: number
  @belongsTo(() => Propriedade, {foreignKey:'idPropriedade'})
  public propriedade: BelongsTo<typeof Propriedade>

  @column()
  public idResponsavel: number
  @belongsTo(() => Responsavel, {foreignKey:'idResponsavel'})
  public responsavel: BelongsTo<typeof Responsavel>

  @column()
  public numeroreceita: string

  @column()
  public numeroart: string

  @column()
  public data: string

  @column()
  public nome: string

  @column()
  public statusreceita: string

  @column()
  public observacao: string

  @column()
  public obsmip: string

  @column()
  public notafiscal: string

  @column()
  public serie: string

  @column()
  public valor: string

  @column()
  public datafinal: string

  @column()
  public statussc: string

  @column()
  public jsonsc: string

  @column()
  public codretsc: string

  @column()
  public enviado: string

  @column()
  public devolucao: string

  @column()
  public cogoias: string

  @column()
  public seriesc: string

  @column()
  public complementoreceita: string

  @column()
  public chavenfe: string

  @column()
  public datanfe: string

  @column()
  public protocolors: string

  @column()
  public protocolocancelamentors: string

  @column()
  public contrato: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

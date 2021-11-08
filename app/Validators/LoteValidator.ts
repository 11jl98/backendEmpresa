import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class LoteValidatorStore {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    id_agrotoxico: schema.number(),
    nomeagrotoxico: schema.string({ trim: true }),
    embalagem: schema.string({ trim: true }),
    unidadeembalagem: schema.string.optional({ trim: true }),
    capacidadeembalagem: schema.string.optional({ trim: true }),
    numlote: schema.string({ trim: true }, [rules.unique({ table: 'lotes', column: 'numlote' })]),
    observacao: schema.string.optional({ trim: true }),
    datavencimento: schema.string.optional({ trim: true }),

  })

  public messages = {}
}
class LoteValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    id_agrotoxico: schema.number(),
    nomeagrotoxico: schema.string({ trim: true }),
    embalagem: schema.string({ trim: true }),
    unidadeembalagem: schema.string.optional({ trim: true }),
    capacidadeembalagem: schema.string.optional({ trim: true }),
    numlote: schema.string({ trim: true }),
    observacao: schema.string.optional({ trim: true }),

  })

  public messages = {}
}

export default { LoteValidatorStore, LoteValidatorUpdate }
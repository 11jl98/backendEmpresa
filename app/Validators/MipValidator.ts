import { schema, rules } from '@ioc:Adonis/Core/Validator'

class MipValidatorStore {

  public schema = schema.create({
	titulo: schema.string({ trim: true }, [rules.maxLength(50)]),
		observacao: schema.string({ trim: true }),
  })

	
  public messages = {}
}

class MipValidatorUpdate {

	public schema = schema.create({
	  titulo: schema.string({ trim: true }, [rules.maxLength(50)]),
		  observacao: schema.string({ trim: true }),
	})
  
	  
	public messages = {}
  }
  

  export default {MipValidatorStore, MipValidatorUpdate}

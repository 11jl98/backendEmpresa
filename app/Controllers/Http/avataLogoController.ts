import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import  Application  from '@ioc:Adonis/Core/Application'

export default class AvataLogoController {
  public async update ({ request, auth }: HttpContextContract) {
    const response = await Database.transaction(async(trx)=>{

      const user = await (await auth.authenticate()!).useTransaction(trx)
      
      const userId = await auth.authenticate()
      const id = userId.id
      const file = await request.file('file')

      const queryPayload = {}
      const savePayload = {
        filename:`${id}.${file?.extname}`
      }
 
      const avatar = await user.related('avatar').firstOrCreate(queryPayload, savePayload)
      
      await file?.move(Application.makePath('uploads'),{
        name: avatar.filename,
        overwrite: true
      })
      return avatar
    })
    return {url: response.url}
  }
  public async show ({params, response}: HttpContextContract) {
    
    return response.download(Application.makePath('uploads',params.file))
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Axios from '../../../utils/api'

export default class AuthController {
  public async store ({ request, auth }: HttpContextContract) {
    const data = request.body()
    console.log(data, 'chegou')

    const json = JSON.parse(data as unknown as string)
    console.log('ta aqui',json.login, json.password)

    const dadosGestao = {
      CNPJ:"03054436000151",
      SOFTWARE: 'Óptica',
      CHAVE: '9EB55AD66A50C42CC9A67E5DB68BB6A6'
    }
    try {
      const liberado = await Axios.post('Liberar/pode', dadosGestao)
      const data = liberado.data.ResSoft
      console.log(data)

      if(data.BLOQUEADO === "SIM" || data.FIMUSO === "BLOQUEADO" || data.CHAVE === "BLOQUEADO"){
        return 'Você não pode acessar no momento, entre em contato com a BMS'
      }
    } catch (error) {
      console.log(error)
    }

    const token = auth.attempt(json.login, json.password, {
      expiresIn:'30 days',
    })
    return token
  }
  public async destroy ({ auth }: HttpContextContract) {
    auth.logout()
  }

}

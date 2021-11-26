import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SiccaRepo from 'App/Repositories/SiccaRepo'


export default class SiccasController {
  public async index({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const dataInicial = params.dataInicial
    const dataFinal = params.dataFinal

    const sicca = await SiccaRepo.index(dataInicial, dataFinal, id)

    var str = ''

    for (var i = 0; i < sicca.length; i++) {
      var line = ''
      console.log('a')
      for (var index in sicca[i]) {
        line += sicca[i][index] + ';'
      }

      line.slice(0, line.length - 1)

      str += line + '\r\n'

      console.log(str)


    }
    return str

  }
}

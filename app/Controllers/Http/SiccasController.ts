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
      for (var index in sicca[i]) {
        if (index != 'agrotoxicos')
          line += sicca[i][index] + ';'
        else
          for (var j = 0; j < sicca[i][index].length; j++) {
            

            for (var index2 in sicca[i][index][j]) {

              line += sicca[i][index][j][index2] + ';'

            }
          }
      }

      line.slice(0, line.length - 1)

      str += line + '\r\n'

      


    }
    return str

  }
}

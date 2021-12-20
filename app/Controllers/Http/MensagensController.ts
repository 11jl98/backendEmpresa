import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mensagem from '../../Models/Mensagem'
import MensagemValidator from '../../Validators/MensagemValidator'
import { v4 as uuid } from 'uuid'

export default class MensagensController {
  public async index({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id;

    const mensagem = await Mensagem
    .query()
    .select()
    .where("id_empresa", "=", id)

    return mensagem
  }

  public async create({ }: HttpContextContract) {
  }

  public async store({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const Uuid = uuid();
    const data = await request.validate(MensagemValidator.MensagemValidatorStore);
    const mensagem = await Mensagem.create({
      idEmpresa: id,
      id_mensagem: Uuid,
      ...data
    })
    mensagem.id_mensagem = Uuid

    return mensagem
  }

  public async show({ }: HttpContextContract) {
  }

  public async edit({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}

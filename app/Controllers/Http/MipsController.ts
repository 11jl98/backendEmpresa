import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mips from '../../Models/Mip'
import MipValidator from '../../Validators/MipValidator';
import { v4 as uuid } from 'uuid'

export default class MipsController {
  public async index ({auth}: HttpContextContract) {
    const user = await auth.authenticate();
    const id = user.id;

    const mip = await Mips
    .query()
    .select()
    .where("id_empresa", "=", id)

    return mip
    
  }

  public async paginateMips ({params, auth}: HttpContextContract) {
    const user = await auth.authenticate();
    const id = user.id;

    const mip = await Mips
    .query()
    .select('id_mip', 'titulo', 'observacao')
    .where("id_empresa", "=", id)
    .paginate(params.page, 5)

    return mip
  }

  public async store ({request, auth}: HttpContextContract) {
    const Uuid = uuid();
    const user = await auth.authenticate();
    const id = user.id;
    
    const data = await request.validate(MipValidator.MipValidatorStore)
    const mip = await Mips.create({
      idEmpresa: id,
      id_mip: Uuid,
      ...data
    })

    mip.id_mip = Uuid;

    return mip
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}

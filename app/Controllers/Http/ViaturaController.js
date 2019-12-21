'use strict'

const Viatura = use('App/Models/Viatura')

class ViaturaController {

  async index() {

    const viaturas = await Viatura.all()

    return viaturas
  }

  async store({ request }) {
    const data = request.only(['placa', 'sigla', 'marca', 'modelo'])

    const viatura = await Viatura.create(data)
    //FALTA LINKAR COM A IMAGEM DA VTR
    return viatura

  }

  async show({ params }) {
    const viatura = await Viatura.findOrFail(params.id)

    return viatura

  }

  async update({ params, request }) {
    const viatura = await Viatura.findOrFail(params.id)

    const data = await request.only(['placa', 'sigla', 'marca', 'modelo'])
    viatura.merge(data)

    await viatura.save(data)

    return viatura

  }

  async destroy({ params }) {
    const viatura = await Viatura.findOrFail(params.id)

    viatura.delete()

  }
}

module.exports = ViaturaController

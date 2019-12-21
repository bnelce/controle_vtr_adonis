'use strict'

const Jornada = use('App/Models/Jornada')

class JornadaController {

  async index() {
    const jornadas = Jornada.all()
    return jornadas
  }

  async store({ request, response }) {
    const data = Jornada.only([
      'id_condutor',
      'id_vtr',
      'data_ini',
      'hora_ini',
      'data_fim',
      'hora_fim',
      'km_ini',
      'km_fim'
    ])
    const jornada = await Jornada.create(data)

    return jornada
  }

  async show({ params }) {
    const jornada = Jornada.findOrFail(params.id)
    return jornada
  }

  async update({ params, request }) {
    const jornada = Jornada.findOrFail(params.id)

    const data = await request.only([
      'id_condutor',
      'id_vtr',
      'data_ini',
      'hora_ini',
      'data_fim',
      'hora_fim',
      'km_ini',
      'km_fim'
    ])

    jornada.merge(data)

    await jornada.save(data)

    return jornada
  }

  async destroy({ params }) {
    const jornada = await Jornada.findOrFail(params.id)

    jornada.delete()
  }
}

module.exports = JornadaController

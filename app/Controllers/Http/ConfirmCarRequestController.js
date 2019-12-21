'use strict'

const CarRequest = use('App/Models/Jornada')

class ConfirmCarRequestController {

  async update({ params }) {
    const carRequest = await CarRequest.findOrFail(params.id)

    const data = await request.only([
      'id_condutor',
      'id_vtr',
      'data_ini',
      'hora_ini',
      'km_ini'
    ])
    carRequest.merge({ ...data, situacao: 2 })//flag --> Em Jornada

    await carRequest.save(data)
  }

}

module.exports = ConfirmCarRequestController

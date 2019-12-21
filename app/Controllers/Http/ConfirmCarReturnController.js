'use strict'

const CarReturn = use('App/Models/Jornada')

class ConfirmCarReturnController {

  async update({ params }) {
    const carReturn = await CarReturn.findOrFail(params.id)

    const data = await request.only([
      'id_condutor',
      'id_vtr',
      'data_ini',
      'hora_ini',
      'km_ini',
      'data_fim',
      'hora_fim',
      'km_fim',
      'situacao'
    ])
    carReturn.merge(data)

    await carReturn.save(data)
  }

}

module.exports = ConfirmCarReturnController

'use strict'

const CarReturn = use('App/Models/Jornada')

class ConfirmCarReturnController {

  async update({ params }) {
    const carReturn = await CarReturn.findOrFail(params.id)

    const data = await request.only([
      'data_fim',
      'hora_fim',
      'km_fim'
    ])
    carReturn.merge({ data, situacao: 4 })

    await carReturn.save(data)
  }

}

module.exports = ConfirmCarReturnController

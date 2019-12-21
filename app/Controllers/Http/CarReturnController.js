
'use strict'

const CarReturn = use('App/Models/Jornada')

class CarReturnController {

  async index() {//deve mostrar todas a viatura que não tenham jornada vigente
    const carsReturns = CarReturn.all()
    return carsReturns
  }

  async show({ params }) {//
    const carReturn = await CarReturn.findOrFail(params.id)
    return carReturn
  }

  async update({ params, request }) {
    const carReturn = await CarReturn.findOrFail(params.id)

    const data = await request.only([
      'data_fim',
      'hora_fim',
      'km_fim'
    ])
    carReturn.merge(data)

    await carReturn.save(data)

    //disparar email e push para o adm

    return carReturn

  }

  async destroy({ params }) {// também não é pra ter delete nessa fase
    const carReturn = await CarReturn.findOrFail(params.id)
    carReturn.delete()
  }
}

module.exports = CarReturnController

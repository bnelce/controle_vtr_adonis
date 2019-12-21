'use strict'

const CarRequest = use('App/Models/Jornada')

class CarRequestController {

  async index() {//deve mostrar todas a viatura que não tenham jornada vigente
    const carsRequests = CarRequest.all()
    return carsRequests
  }

  async store({ request }) {
    const data = request.only([
      'id_viatura',
      'id_user',
      'data_ini',
      'hora_ini',
      'km_ini'])

    const carRequest = CarRequest.create(data)

    //disparar email e push para o adm

    return carRequest

  }

  async show({ params }) {
    const carRequest = await CarRequest.findOrFail(params.id)
    return carRequest
  }

  async update({ params, request }) {
    const carRequest = await CarRequest.findOrFail(params.id)

    const data = await request.only(['id_viatura',
      'id_user',
      'data_ini',
      'hora_ini',
      'km_ini'])
    carRequest.merge(data)

    await carRequest.save(data)

    return carRequest

  }

  async destroy({ params }) {
    const carRequest = await CarRequest.findOrFail(params.id)

    carRequest.delete()

  }
}

module.exports = CarRequestController

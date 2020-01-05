'use strict'

const CarRequest = use('App/Models/Jornada')
const Mail = use('Mail')
const User = use('App/Models/User')
const Viatura = use('App/Models/Viatura')


class CarRequestController {

  async index () { //deve mostrar todas a viatura que não tenham jornada vigente
    const carsRequests = CarRequest.all()
    return carsRequests
  }

  async store ({ request }) {
    const data = request.only([
      'id_vtr',
      'id_condutor',
      'data_ini',
      'hora_ini',
      'km_ini'])


    const carRequest = CarRequest.create ({ ...data, situacao: 1 })

    //dados da viatura e do condutor
    const user = await User.findOrFail(data.id_condutor)
    const vtr = await Viatura.findOrFail(data.id_vtr)
    await Mail.send(
      ['emails.car_request'],
      {
        vtr: vtr.sigla,
        user: user.username
      },
      message => {
        message
          .to('abner.oliveira.ce@gmail.com')
          .from('abner.oliveira.ce@gmail.com', 'Abner Oliveira')
          .subject('Solicitação de Viatura')
      }
    )

    return carRequest

  }

  async show ({ params }) {
    const carRequest = await CarRequest.findOrFail(params.id)
    return carRequest
  }

  async update ({ params, request }) {
    const carRequest = await CarRequest.findOrFail(params.id)

    const data = await request.only(['id_viatura',
      'id_user',
      'data_ini',
      'hora_ini',
      'km_ini'])
    carRequest.merge(data)

    await carRequest.save(data)

    //disparar email e push para o adm

    return carRequest

  }

  async destroy ({ params }) {
    const carRequest = await CarRequest.findOrFail(params.id)

    carRequest.delete ()

  }
}

module.exports = CarRequestController

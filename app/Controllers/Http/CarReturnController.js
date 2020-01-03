
'use strict'

const CarReturn = use('App/Models/Jornada')
const Mail = use('Mail')
const User = use('App/Models/User')
const Viatura = use('App/Models/Viatura')


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

    await carReturn.save({ data, situacao: 3 })

    //disparar email e push para o adm
    const user = await User.findOrFail(carReturn.id_condutor)
    const vtr = await Viatura.findOrFail(carReturn.id_vtr)

    //disparar email e push para o adm
    await Mail.send(
      ['emails.car_return'],
      {
        vtr: vtr.sigla,
        user: user.username
      },
      message => {
        message
          .to('abner.oliveira.ce@gmail.com')
          .from('abner.oliveira.ce@gmail.com', 'Abner Oliveira')
          .subject('Retorno de Viatura')
      }
    )

    return carReturn

  }

  async destroy({ params }) {// também não é pra ter delete nessa fase
    const carReturn = await CarReturn.findOrFail(params.id)
    carReturn.delete()
  }
}

module.exports = CarReturnController

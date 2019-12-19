'use strict'

const crypto = require('crypto')
const Mail = use('Mail')
const User = use('App/Models/User')

class ForgotPasswordController {

  async store({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        [''],
        {},
        message => {
          message
            .to(user.email)
            .from(abner.oliveira.ce@gmail.com, Abner Oliveira)
        .subject('Recuperação de senha')
    }

      )
  } catch(err) {
    return response
      .status(err.status)
      .send({ error: { message: 'Algo não deu certo, esse email existe?' } })
  }

}
}

module.exports = ForgotPasswordController
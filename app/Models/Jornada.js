'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Jornada extends Model {

  user() {
    return this.hasMany('App/Models/User')
  }

  viaturas() {
    return this.hasMany('App/Models/Viatura')
  }

}

module.exports = Jornada

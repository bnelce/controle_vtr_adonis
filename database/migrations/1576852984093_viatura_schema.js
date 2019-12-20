'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ViaturaSchema extends Schema {
  up() {
    this.create('viaturas', (table) => {
      table.increments()
      table.string('placa', 7).notNullable().unique()
      table.string('sigla', 7).notNullable().unique()
      table.string('marca', 60).notNullable()
      table.string('modelo', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('viaturas')
  }
}

module.exports = ViaturaSchema

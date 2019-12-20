'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JornadaSchema extends Schema {
  up() {
    this.create('jornadas', (table) => {
      table.increments()
      table
        .integer('id_condutor')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')

      table
        .integer('id_vtr')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('viaturas')
      table.date('data_ini')
      table.date('data_fim')
      table.time('hora_ini', { precision: 6 })
      table.time('hora_fim', { precision: 6 })
      table.integer('km_ini', 11)
      table.integer('km_fim', 11)
      table.timestamps()
    })
  }

  down() {
    this.drop('jornadas')
  }
}

module.exports = JornadaSchema

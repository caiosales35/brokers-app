import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', table => {
    table.bigIncrements('key').primary().unsigned()
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('int_code', 4)
    table.string('phone', 255)
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user')
}

import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('property', table => {
    table.bigInteger('key').primary().unsigned()
    table.string('code', 5).notNullable().unique()
    table.string('name', 255).notNullable()
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('property')
}

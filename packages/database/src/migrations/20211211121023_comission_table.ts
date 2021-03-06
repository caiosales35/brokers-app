import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('comission', table => {
    table.bigIncrements('key').primary().unsigned()
    table.bigInteger('value').notNullable()
    table.dateTime('date').notNullable()
    table.bigInteger('user_key').unsigned().notNullable().references('user.key')
    table.string('property_code', 5).references('property.code')
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('comission')
}

import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('property_lead', table => {
    table.bigIncrements('key').primary().unsigned()
    table
      .bigInteger('property_key')
      .unsigned()
      .notNullable()
      .references('property.key')
    table.bigInteger('lead_key').unsigned().notNullable().references('lead.key')
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('property_lead')
}

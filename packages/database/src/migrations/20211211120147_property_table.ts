import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('property', table => {
    table.bigIncrements('key').primary().unsigned()
    table.string('code', 5).notNullable().unique()
    table.string('title', 255).notNullable()
    table.string('sale_price', 255).notNullable()
    table
      .enu('type', [
        'CASA_DE_VILA',
        'CAVERNA',
        'PALAFITA',
        'APARTAMENTO',
        'CASA'
      ])
      .notNullable()
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('property')
}

import { Knex } from 'knex'

exports.seed = function (knex: Knex) {
  // Deletes ALL existing entries
  return knex('property_lead')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('property_lead').insert([
        {
          lead_key: 1,
          property_key: 1
        },
        {
          lead_key: 2,
          property_key: 2
        },
        {
          lead_key: 3,
          property_key: 3
        },
        {
          lead_key: 4,
          property_key: 4
        },
        {
          lead_key: 5,
          property_key: 5
        },
        {
          lead_key: 6,
          property_key: 6
        },
        {
          lead_key: 7,
          property_key: 7
        },
        {
          lead_key: 8,
          property_key: 4
        },
        {
          lead_key: 9,
          property_key: 2
        },
        {
          lead_key: 10,
          property_key: 2
        },
        {
          lead_key: 11,
          property_key: 7
        },
        {
          lead_key: 12,
          property_key: 4
        },
        {
          lead_key: 13,
          property_key: 6
        }
      ])
    })
}

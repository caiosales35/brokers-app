import { Knex } from 'knex'

exports.seed = function (knex: Knex) {
  // Deletes ALL existing entries
  return knex('property')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('property').insert([
        {
          key: 1,
          code: 'IZM1',
          name: 'IZM1'
        },
        {
          key: 2,
          code: 'IZM11',
          name: 'IZM11'
        },
        {
          key: 3,
          code: 'IZM12',
          name: 'IZM12'
        },
        {
          key: 4,
          code: 'IZM6',
          name: 'IZM6'
        },
        {
          key: 5,
          code: 'IZM15',
          name: 'IZM15'
        },
        {
          key: 6,
          code: 'IZM16',
          name: 'IZM16'
        },
        {
          key: 7,
          code: 'IZM19',
          name: 'IZM19'
        },
        {
          key: 8,
          code: 'IZM21',
          name: 'IZM21'
        },
        {
          key: 9,
          code: 'IZM22',
          name: 'IZM22'
        },
        {
          key: 10,
          code: 'IZM25',
          name: 'IZM25'
        },
        {
          key: 11,
          code: 'IZM26',
          name: 'IZM26'
        },
        {
          key: 12,
          code: 'IZM29',
          name: 'IZM29'
        },
        {
          key: 13,
          code: 'IZM31',
          name: 'IZM31'
        },
        {
          key: 14,
          code: 'IZM32',
          name: 'IZM32'
        },
        {
          key: 15,
          code: 'IZM35',
          name: 'IZM35'
        },
        {
          key: 16,
          code: 'IZM36',
          name: 'IZM36'
        },
        {
          key: 17,
          code: 'IZM39',
          name: 'IZM39'
        },
        {
          key: 18,
          code: 'IZM2',
          name: 'IZM2'
        },
        {
          key: 19,
          code: 'IZM5',
          name: 'IZM5'
        },
        {
          key: 20,
          code: 'IZM9',
          name: 'IZM9'
        }
      ])
    })
}

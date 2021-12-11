import { Knex } from 'knex'

exports.seed = function (knex: Knex) {
  // Deletes ALL existing entries
  return knex('comission')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('comission').insert([
        {
          key: 1,
          value: '98000',
          date: '2020-09-10T15:51:33.480Z',
          user_key: 1,
          property_code: 'IZM1'
        },
        {
          key: 2,
          value: '110000',
          date: '2020-09-05T15:51:33.480Z',
          user_key: 1,
          property_code: 'IZM2'
        },
        {
          key: 3,
          value: '52000',
          date: '2020-09-04T15:51:33.480Z',
          user_key: 1,
          property_code: 'IZM5'
        },
        {
          key: 4,
          value: '54000',
          date: '2020-08-27T15:51:33.480Z',
          user_key: 1,
          property_code: 'IZM6'
        },
        {
          key: 5,
          value: '92200',
          date: '2020-08-26T12:30:14.480Z',
          user_key: 1,
          property_code: 'IZM9'
        },
        {
          key: 6,
          value: '102000',
          date: '2020-09-12T15:51:33.480Z',
          user_key: 2,
          property_code: 'IZM11'
        },
        {
          key: 7,
          value: '100000',
          date: '2020-09-09T15:51:33.480Z',
          user_key: 2,
          property_code: 'IZM12'
        },
        {
          key: 8,
          value: '92000',
          date: '2020-09-03T15:51:33.480Z',
          user_key: 2,
          property_code: 'IZM15'
        },
        {
          key: 9,
          value: '74000',
          date: '2020-08-25T15:51:33.480Z',
          user_key: 2,
          property_code: 'IZM16'
        },
        {
          key: 10,
          value: '52200',
          date: '2020-08-23T12:30:14.480Z',
          user_key: 2,
          property_code: 'IZM19'
        },
        {
          key: 11,
          value: '520000',
          date: '2020-09-12T15:51:33.480Z',
          user_key: 3,
          property_code: 'IZM21'
        },
        {
          key: 12,
          value: '1100000',
          date: '2020-09-09T15:51:33.480Z',
          user_key: 3,
          property_code: 'IZM22'
        },
        {
          key: 13,
          value: '470000',
          date: '2020-08-17T15:51:33.480Z',
          user_key: 3,
          property_code: 'IZM25'
        },
        {
          key: 14,
          value: '520000',
          date: '2020-08-20T15:51:33.480Z',
          user_key: 3,
          property_code: 'IZM26'
        },
        {
          key: 15,
          value: '520200',
          date: '2020-08-27T12:30:14.480Z',
          user_key: 3,
          property_code: 'IZM29'
        },
        {
          key: 16,
          value: '61000',
          date: '2020-09-01T15:51:33.480Z',
          user_key: 4,
          property_code: 'IZM31'
        },
        {
          key: 17,
          value: '90000',
          date: '2020-08-15T15:51:33.480Z',
          user_key: 4,
          property_code: 'IZM32'
        },
        {
          key: 18,
          value: '47000',
          date: '2020-08-22T15:51:33.480Z',
          user_key: 4,
          property_code: 'IZM35'
        },
        {
          key: 19,
          value: '58000',
          date: '2020-08-25T15:51:33.480Z',
          user_key: 4,
          property_code: 'IZM36'
        },
        {
          key: 20,
          value: '54300',
          date: '2020-08-26T12:30:14.480Z',
          user_key: 4,
          property_code: 'IZM39'
        }
      ])
    })
}

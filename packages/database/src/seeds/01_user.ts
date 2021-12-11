import { Knex } from 'knex'

exports.seed = function (knex: Knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          key: 1,
          name: 'Julião',
          email: 'juliao@corretor.com',
          int_code: '55',
          phone: '11999999999'
        },
        {
          key: 2,
          name: 'Marilda',
          email: 'marilda@corretora.com',
          int_code: '55',
          phone: '11988888888'
        },
        {
          key: 3,
          name: 'Josué',
          email: 'josue@corretor.com',
          int_code: '55',
          phone: '11977777777'
        },
        {
          key: 4,
          name: 'Luma',
          email: 'luma@corretora.com',
          int_code: '55',
          phone: '11966666666'
        }
      ])
    })
}

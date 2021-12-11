import { Knex } from 'knex'

exports.seed = function (knex: Knex) {
  // Deletes ALL existing entries
  return knex('lead')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('lead').insert([
        {
          key: 1,
          name: 'Yuri',
          email: 'yuri@email.com',
          int_code: '55',
          phone: '1191111111',
          broker_key: 1
        },
        {
          key: 2,
          name: 'Vitor',
          email: 'vitor@email.com',
          int_code: '55',
          phone: '11922222222',
          broker_key: 3
        },
        {
          key: 3,
          name: 'Pedro',
          email: 'pedro@email.com',
          int_code: '55',
          phone: '11933333333',
          broker_key: 4
        },
        {
          key: 4,
          name: 'Fernando',
          email: 'fernando@email.com',
          int_code: '55',
          phone: '11944444444',
          broker_key: 2
        },
        {
          key: 5,
          name: 'Lucas',
          email: 'lucas@email.com',
          int_code: '55',
          phone: '11955551111',
          broker_key: 1
        },
        {
          key: 6,
          name: 'Raphael',
          email: 'raphael@email.com',
          int_code: '55',
          phone: '11955551111',
          broker_key: 1
        },
        {
          key: 7,
          name: 'Maurício',
          email: 'mauricio@email.com',
          int_code: '55',
          phone: '11955552222',
          broker_key: 4
        },
        {
          key: 8,
          name: 'Laurindo',
          email: 'laurindo@email.com',
          int_code: '55',
          phone: '11955553333',
          broker_key: 2
        },
        {
          key: 9,
          name: 'Luceia',
          email: 'luceia@email.com',
          int_code: '55',
          phone: '11966661111',
          broker_key: 3
        },
        {
          key: 10,
          name: 'Karlus',
          email: 'karlus@email.com',
          int_code: '55',
          phone: '11966668888',
          broker_key: 3
        },
        {
          key: 11,
          name: 'Yanca',
          email: 'yanca@email.com',
          int_code: '55',
          phone: '11944447777',
          broker_key: 4
        },
        {
          key: 12,
          name: 'Paulinho',
          email: 'pauinho@email.com',
          int_code: '55',
          phone: '11988887755',
          broker_key: 2
        },
        {
          key: 13,
          name: 'Cristiana',
          email: 'cristiana@email.com',
          int_code: '55',
          phone: '11955551111',
          broker_key: 1
        }
      ])
    })
}

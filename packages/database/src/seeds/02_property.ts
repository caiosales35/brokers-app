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
          title: 'Linda casa de vila no bairro do Tatuapé',
          sale_price: '28000000',
          type: 'CASA_DE_VILA'
        },
        {
          key: 2,
          code: 'IZM26',
          title: 'Caverna bem iluminada',
          sale_price: '29500000',
          type: 'CAVERNA'
        },
        {
          key: 3,
          code: 'IZM35',
          title: 'Palafita bem localizada em Itaquaquecetuba',
          sale_price: '29500000',
          type: 'PALAFITA'
        },
        {
          key: 4,
          code: 'IZM19',
          title: 'Palafita bem localizada em Itaquaquecetuba',
          sale_price: '29500000',
          type: 'PALAFITA'
        },
        {
          key: 5,
          code: 'IZM6',
          title: 'Apartamento com 103 quartões na Praça da Sé',
          sale_price: '99500000',
          type: 'APARTAMENTO'
        },
        {
          key: 6,
          code: 'IZM9',
          title: 'Casa torta no Jardins',
          sale_price: '109500000',
          type: 'CASA'
        },
        {
          key: 7,
          code: 'IZM31',
          title: 'Casa de árvore no Ibirapuera',
          sale_price: '99500000',
          type: 'CASA'
        },
        {
          key: 10,
          code: 'IZM2',
          title: 'IZM2',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 11,
          code: 'IZM5',
          title: 'IZM5',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 12,
          code: 'IZM11',
          title: 'IZM11',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 13,
          code: 'IZM12',
          title: 'IZM12',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 14,
          code: 'IZM15',
          title: 'IZM15',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 15,
          code: 'IZM16',
          title: 'IZM16',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 16,
          code: 'IZM21',
          title: 'IZM21',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 17,
          code: 'IZM22',
          title: 'IZM22',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 18,
          code: 'IZM25',
          title: 'IZM25',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 19,
          code: 'IZM29',
          title: 'IZM29',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 20,
          code: 'IZM32',
          title: 'IZM32',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 21,
          code: 'IZM36',
          title: 'IZM36',
          sale_price: '29500000',
          type: 'CASA'
        },
        {
          key: 22,
          code: 'IZM39',
          title: 'IZM39',
          sale_price: '29500000',
          type: 'CASA'
        }
      ])
    })
}

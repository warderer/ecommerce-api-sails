/**
 * Item.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    productName: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      columnType: 'text',
      required: true,
    },
    price: {
      type: 'number',
      required: true,
      columnType: 'double'
    },
    categories: {
      type: 'string',
      isIn: [
        'Books', 'Movies', 'Music', 'Games',
        'Electronics', 'Computers', 'Home', 'Garden',
        'Tools', 'Grocery', 'Health', 'Beauty', 'Toys',
        'Kids', 'Baby', 'Clothing', 'Shoes', 'Jewelery',
        'Sports', 'Outdoors', 'Automotive', 'Industrial'
      ],
      required: true
    },
    brand: {
      type: 'string',
      required: true,
    },
    sku: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      isURL: true,
      required: true,
    },
    isActive: {
      type: 'boolean',
      defaultsTo: true
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};


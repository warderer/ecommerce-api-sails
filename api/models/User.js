/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    role: {
      type: 'string',
      isIn: ['CUSTOMER', 'ADMIN'],
      defaultsTo: 'CUSTOMER'
    },
    firstName: {
      type: 'string',
      required: true,
      // minLenght: 5,
      // maxLength: 30
    },
    lastName: {
      type: 'string',
      required: true,
    },
    birthDate: {
      type: 'string',
      columnType: 'date',
      allowNull: true
    },
    gender: {
      type: 'string',
      isIn: ['M', 'F', 'O'],
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true,
      unique: true
    },
    password: {
      type: 'string',
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


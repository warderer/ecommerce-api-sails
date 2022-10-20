/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');
const bcrypt = require('bcrypt');
const saltRounds = 10; //iteraciones bcrypt

module.exports = {

  /**
    * `UserController.signup()`
    */
  signup: async function (req, res) {
    try {
      const schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required(),
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        gender: joi.string().valid('M','F','O'),
        role: joi.string().valid('CUSTOMER','ADMIN'),
        birthDate: joi.date(),
        isActive: joi.boolean()
      });
      const { email, password, firstName, lastName, gender, role, birthDate } = await schema.validateAsync(req.allParams()); // Validamos los datos recibidos contra el schema definido

      // Ciframos la contraseña recibida en la petición
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        email,
        password: hashedPassword, //Guardamos la contraseña cifrada
        firstName,
        lastName,
        gender,
        role,
        birthDate
      }).fetch();
      return res.ok(user);
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({err}).json();
      }
      return res.serverError(err).json();
    }
  },

  /**
    * `UserController.login()`
    */
  login: async function (req, res) {
    return res.json({
      todo: 'signup() is not implemented yet!'
    });

  }
};


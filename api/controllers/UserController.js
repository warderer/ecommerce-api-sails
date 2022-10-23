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
      const { email, password, firstName, lastName, gender, role, birthDate, isActive } = await schema.validateAsync(req.allParams()); // Validamos los datos recibidos contra el schema definido

      // Ciframos la contraseña recibida en la petición
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        email,
        password: hashedPassword, //Guardamos la contraseña cifrada
        firstName,
        lastName,
        gender,
        role,
        birthDate,
        isActive
      }).fetch();
      delete user.password; // Removemos de la respuesta la contraseña
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
    try {
      const schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()
      });
      const {email, password} = await schema.validateAsync(req.allParams());
      const user = await User.findOne({email}); // Busco el correo en la DB
      if (!user) {
        return res.badRequest({err: 'User not found'});
      }
      // Si el usuario existe, comparo la contraseña
      const comparedPassword = await bcrypt.compare(password, user.password);
      // Genero el Token de JWT
      const token = AuthService.JWTIssuer({user: user.id, role: user.role}, '1 day');
      return (comparedPassword)
        ? res.ok({token})
        : res.badRequest({err: 'Password Error'});
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({err}).json();
      }
      return res.serverError(err).json();
    }
  }
};


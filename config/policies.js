/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  UserController: {
    // Apply the 'isLoggedIn' policy to the 'update' action of 'UserController'
    '*': 'isLoggedIn', // Protegemos todas las rutas de usuario por defecto
    'login': true, // Indicamos que login es una ruta libre
    'signup': true, // Indicamos que signup es una ruta libre
    'destroy': ['isLoggedIn','isAdmin']
  },

  ItemController: {
    'create': ['isLoggedIn','isAdmin'],
    'update': ['isLoggedIn','isAdmin'],
    'destroy': ['isLoggedIn','isAdmin']
  }

  /*
  Consultar cuales son las otras Rutas que autogenera Sails:
  https://sailsjs.com/documentation/concepts/blueprints/blueprint-routes
  'find'
  'findOne'
  'create'
  'update'
  'destroy'
  'add'
  'remove'
  'replace'
  */

};

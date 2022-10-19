/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  // User
  'POST /api/v1/user/login': 'UserController.login',
  'POST /api/v1/user/signup': 'UserController.signup',
};

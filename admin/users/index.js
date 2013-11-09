/**
 * Module dependencies.
 */

var tower = require('tower');
var route = tower.route;

/**
 * Draw some routes.
 */

route.map(function() {

  // Create a new 'users' resource.
  // This will create a new resource for both the client and
  // server.
  //
  // Currently, the first request always go through the server.
  // Then, subsequent requests go through the client.
  //
  // Example:
  //
  //  - visit /users
  //    = It will render a list of users from the server code.
  //  - visit / then /users
  //    = It will render a list of users from the client code.
  //

  this.resource('users');

});
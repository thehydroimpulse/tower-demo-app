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
  this.resource('users');

});
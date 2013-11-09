/**
 * Module dependencies.
 */

var tower = require('tower');
var route = tower.route;

/**
 * Draw some routes.
 */

route.map(function() {

  // Create a new 'posts' resource.
  this.resource('users.posts');

});
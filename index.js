/**
 * Module dependencies.
 */

var tower = require('tower'),
    view = tower.view,
    server = tower.server,
    app = server(),
    get = server.get,
    post = server.post,
    put = server.put;

// Register the view folder.
// This will start watching the files.
view.add(__dirname + '/views');

/**
 * GET /
 *
 * @route index
 * @render index
 * @layout home
 * @public
 */

get('index', '/')
.action(function *(){
  // Add a new scope property:
  this.scope.title = 'Hello World';

  // Render the `index` view, under the `home` layout.
  // This will place the `index` view under the
  // `data-body` directive under the layout.
  this.render('index', 'home');
});

/**
 * GET /real
 *
 * Real-time demo.
 *
 * @route real
 * @render index
 * @layout home
 * @public
 */

get('index', '/real')
.action(function *(){
  // Add a new scope property:
  this.scope.title = 'Hello World';

  // Listen on a websocket message:
  // This endpoint will only be active as long as
  // the route is active. If you want a long-term
  // subscription, you'll need to place it outside
  // any specific routes.
  this.subscribe('connect', function *(){
    // Access the `message` property.
    console.log(this.message);

    // Emit a new message to __all__ users connected:
    server.publish('new user', {
      id: this.message.id,
      username: this.message.username
    });
  });

  // Render the `real` view, under the `home` layout.
  // This will place the `real` view under the
  // `data-body` directive under the layout.
  this.render('real', 'home');
});

// Listen to the appropriate port:
app.listen();
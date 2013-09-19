/**
 * Module dependencies.
 */

var tower = require('tower'),
    view = tower.view,
    resource = tower.resource,
    server = tower.server,
    app = server(),
    get = server.get,
    post = server.post,
    put = server.put;

// Register the view folder.
// This will start watching the files.
view.add('template', __dirname + '/views/templates');
view.add('layout', __dirname + '/views/layouts');


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


// Listen to the appropriate port:
app.listen();

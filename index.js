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

require('tower-memory-adapter');

resource('post')
  .attr('title')
  .attr('body', 'text')
  .attr('published', 'boolean', false);

function create(attrs) {
  return function(fn){
    resource('post').init(attrs).save(fn);
  };
}

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
  this.scope.users = [
    { username: 'TheHydroImpulse', id: 1 },
    { username: 'Bob', id: 2 }
  ];

  // XXX: Make this work.
  // this.scope.posts = yield resource('post').all();
  // this.scope.authors = yield this.scope.posts.get('authors');

  // XXX: Make sessions work.
  // this.session.id = 123;
  // this.session.username = 'TheHydroImpulse';

  // Render the `index` view, under the `home` layout.
  // This will place the `index` view under the
  // `data-body` directive under the layout.
  yield this.render('index', 'home');
});


// Listen to the appropriate port:
app.listen();

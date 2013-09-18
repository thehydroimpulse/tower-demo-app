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
 * @route index
 * @render index
 */

get('index', '/')
.action(function*(){
  this.scope.title = 'Hello World';
  this.render('index', 'home');
});

app.listen();
var tower = require('tower'),
    server = tower.server,
    app = server(),
    get = server.get,
    post = server.post,
    put = server.put;

get('index', '/')
.action(function*(){
  this.body = 'Hello World';
});

app.listen();
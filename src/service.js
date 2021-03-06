let express = require('express');
let http = require('http');

let server;

exports.start = function start(port = 8080) {
  let app = express();
  app.get('/', (req, res) => res.send('200 OK'));
  app.get('/connect', require('./connect'));
  app.get('/crash', require('./crash'));
  app.get('/info', require('./info'));
  app.get('/log', require('./log'));
  app.post('/profile', require('./profile'));
  app.post('/restart', require('./restart'));
  app.get('*', (req, res) => res.status(404).send('404 Not Found'));
  server = http.createServer(app);
  server.listen(port);
};

exports.stop = function stop() {
  server.close();
};

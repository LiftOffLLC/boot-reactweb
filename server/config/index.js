require('dotenv').config();

module.exports = function(express, app) {
  require('./mongoose');
  var bodyParser = require('body-parser');
  app.use(require('morgan')('dev'));
  app.use(bodyParser.json({strict: false}));
  app.use(express.static('public'));
  app.use(express.static('dist'));
}

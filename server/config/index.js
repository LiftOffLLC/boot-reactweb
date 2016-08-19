require('dotenv').config();

module.exports = function(express, app) {
  require('./mongoose');
  var bodyParser = require('body-parser');
  app.use(require('morgan')('dev'));
  app.use(bodyParser.json({strict: false}));
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  }))
  app.use(express.static('dist'));

}

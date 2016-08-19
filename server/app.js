var express = require('express');
var app = express();
var errorLib = require('./middleware/error_handler');
var render = require('./middleware/render');
var bodyParser = require('body-parser');
var logger = require('morgan');
var http =  require('http');

app.use(logger('dev'));
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(express.static('dist'));

app.use(render);

app.use(errorLib.errorHandler);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


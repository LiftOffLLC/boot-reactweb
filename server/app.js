var express = require('express');
var app = express();
var errorLib = require('./errors/error_handler');
var path = require('path');
var render = require('./render');

require('./config')(express, app);
app.use('/', require('./routes')(express, {}));
app.use(errorLib.errorHandler);

// app.get('*', function (req, res, next) {
//   return res.sendFile(path.resolve(__dirname + '/../public/index.html'))
// })

app.use(render)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// app.get('*', function (req, res, next) {
//   return res.sendFile(path.resolve(__dirname + '/../public/index.html'))
// }
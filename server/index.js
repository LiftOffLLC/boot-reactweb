var express = require('express');
var app = express();
var errorLib = require('./errors/error_handler');

require('./config')(express, app);
app.use('/', require('./routes')(express, {}));
app.use(errorLib.errorHandler);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

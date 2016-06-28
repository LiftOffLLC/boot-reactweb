var mongoose = require('mongoose');
var mongoUrl = process.env.MONGODB_URL;
console.log(mongoUrl)
mongoose.connect(mongoUrl);

mongoose.connection.on('connected', function(){
  console.log('Connected to MongoDB at: %s ', mongoUrl);
  require('../models')
});


mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

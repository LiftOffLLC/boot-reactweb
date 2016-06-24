var express = require('express');
var app = express();

require('./config')(express, app)

app.get('/xhr/contacts.json', function(req, res){
  res.send({
    "data": [
      {
        "id": "1",
        "name": "abc"
      },
      {
        "id": "2",
        "name": "XYZ"
      }
    ]
  }
)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

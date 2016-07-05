module.exports = {
  errorHandler: function (err, req, res, next) {
    console.log(err);
    if (err.status === 400) {
      return res.send(400, "Invalid Input")
    }
    res.send(500, "Something bad happened. :(");
  }
}

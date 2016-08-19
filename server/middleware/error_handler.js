module.exports = {
  errorHandler: function (err, req, res, next) {
    if (err.status === 400) {
      return res.status(400).send({error : "Invalid Input"});
    }
    res.status(500).send({error : "Something bad happened. :("});
  }
}

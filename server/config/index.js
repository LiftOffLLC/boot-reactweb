module.exports = function(express, app) {
  app.use(express.static('public'));
  app.use(express.static('dist'));
}

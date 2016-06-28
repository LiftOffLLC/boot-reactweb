module.exports = function(express, opts) {
  var controllers = require('../controllers')(opts);
  var router = express.Router();

  router.get('/contacts', controllers.index);
  router.post('/contacts', controllers.addContact);
  return router;
};

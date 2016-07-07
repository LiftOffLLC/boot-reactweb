const Authentication = require('../controllers/auth');

module.exports = function(express, opts) {
  const controllers = require('../controllers')(opts);
  var router = express.Router();

  router.post('/signup', Authentication.signup);

  router.get('/contacts', controllers.index);
  router.post('/contacts', controllers.addContact);
  return router;
};

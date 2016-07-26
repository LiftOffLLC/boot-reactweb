const Authentication = require('../controllers/auth');
const passport = require('passport');
const passportConfig = require('../config/passport');

//use the jwt strategy
//by default, passport tries to make session cookie based auth,
//so we make session: false
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(express, opts) {
  const controllers = require('../controllers')(opts);
  var router = express.Router();

  router.post('/signup', Authentication.signup);
  router.post('/signin', requireSignin, Authentication.signin);

  router.get('/contacts', requireAuth, controllers.index);
  router.post('/contacts', requireAuth, controllers.addContact);
  return router;
};

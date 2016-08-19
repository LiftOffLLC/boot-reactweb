const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config/config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({sub : user.id, iat: timestamp}, config.secret)
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  //check if email and password are provided in the body
  if(!email || !password) {
    res.status(422).send({error : 'You must provide email and password'});
  }

  User.findOne({email}, function (err, existingUser) {
    if(err) { return next(err); }

    //check if a user with an email does exist
    if(existingUser) {
      return res.status(422).send({error : 'Email already in use'});
    }

    //if user with email does not exist, create and save the user
    const newUser = new User({
      email,
      password
    });

    //respond with the new user detail
    newUser.save(function (err, user) {
      if(err) { return next(err); }

      if(user) {
        const token = tokenForUser(user);
        res.json({token});
      }
    })

  })
};

exports.signin = function (req, res, next) {

  if(req.xhr){
    const token = tokenForUser(req.user);
    res.send({token});
  }else{
    res.redirect('/contact-list')
  }
};
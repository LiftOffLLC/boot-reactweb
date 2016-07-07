const passport = require('passport');
const User = require('../models/user');
const config = require('./config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

//setup options for jwt strategy
//contains configurations like where to find jwt
const jwtOptions = {
  jwtFromRequest : ExtractJwt.fromHeader('authorization'),
  secretOrKey : config.secret
};

//create the jwt strategy
//payload is the decoded jwt token
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {

  //see if userId in the payload exists in the database
  //if yes call done with that user
  //otherwise call done without a user object

  User.findById(payload.sub, function (err, user) {
    if(err) { return done(err, false); }  // second arguement to done is isAuthenticated boolean
    if(user) {
      done(null, user);
    } else {
      done(null, false); //user was not found
    }
  });

});

//in strategy options tell passport to use email as a username
//by default passport local strategy takes a username instead of an email
const localOptions = {
  usernameField : 'email'
};

const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  //verify this email and password
  //call done with the jwt token if username password are correct
  //call done with false if email and password dont match

  User.findOne({email}, function (err, user) {
    if(err) { return done(err, false);}
    if(!user) { return done(null, false);}

    //if user found compared the two passwords
    user.comparePasswords(password, function (err, isMatched) {
      if(err) { return done(err); }
      if(!isMatched) { return done(null, isMatched); }
      return done(null, user);
    })
  })
});

passport.use(jwtLogin);
passport.use(localLogin);
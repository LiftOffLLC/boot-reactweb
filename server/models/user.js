const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bCrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email : {type : String, unique : true, lowercase : true},
  password : String
});

//on save hook, encrypt password
//runs before saving the user
userSchema.pre('save', function (next) {

  //get access to the user model
  const user = this;

  //generate a salt
  bCrypt.genSalt(10, function (err, salt) {
    if(err) { return next(err); }

    //create hashed password using the salt generated
    bCrypt.hash(user.password, salt, null, function (err, hash) {
      if(err) { return next(err) };

      //override password with encrypted password
      user.password = hash;
      next();
    })
  })
})

const ModelClass = mongoose.model('User', userSchema);

module.exports = ModelClass;
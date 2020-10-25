const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

// passport 'serializes' objects to make them easy to store, converting the user to an id
// we pass in 2 args, 1st user, 2nd cb = callback (a callback function)
passport.serializeUser((user, cb) => {
  cb(null, user.id)
});
// a full explanation is available in the documentation.

// Passport then 'deserializes' objects by taking the user's serialized id
// and looking it up in the DB

passport.deserializeUser((id, cb) => {
  db.user.findByPk(id).then(user => {
    cb(null, user);
  }).catch(cb)
});


passport.use(new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, cb) => {
  // find the user in the db w/ email
  db.user.findOne({
    where: { email } // where: { email: email } object property shorthand
  }).then(user => {
    // if there's no user or the password is wrong cb(null, false
    if (!user || !user.validPassword(password)) {
      cb(null, false);
    } else {
      // log the user in with cb(null, user)
      cb(null, user);
    }
  }).catch(cb)
}));

module.exports = passport;
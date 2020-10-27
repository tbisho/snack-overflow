// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' '
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
//need to require this on any page you must be loggedin to use
const isLoggedIn = require('../middleware/isLoggedIn');


// can only view snack page if logged in
router.get('/snack', isLoggedIn, (req, res) => {
  // when a request is made to the snack page, render snack.ejs
  res.render('./snack/snack')
});
//Post /snacks - receive the name, description & imgUrl of the snack and add it to the DB
router.post('/snack', isLoggedIn, (req, res) => {
// can only add snack if logged in
//get form data (from snack.ejs) and add a new record to the DB 
db.user.findOrCreate({
  // constraint
  where: {
    name: req.user.name,
    email: req.user.email
  }
}).then(function([returnedUser, created]) {
  // Second step: findOrCreate a snack to associate with Susan
  db.snack.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      imgUrl: req.body.imgUrl
    }
  }).then(function([returnedSnack, created]) {
    returnedUser.addSnack(returnedSnack).then( function(relationInfo) {
      res.redirect('/profile')
    })
  })
})
})
module.exports = router
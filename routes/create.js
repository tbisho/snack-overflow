// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' '
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
//need to require this on any page you must be loggedin to use
const isLoggedIn = require('../middleware/isLoggedIn');


// middleware

// can only view snack page if logged in
router.get('/snack', isLoggedIn, (req, res) => {
  // when a request is made to the snack page, render snack.ejs
  console.log(isLoggedIn)
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
  console.log(returnedUser == req.user)
  console.log('this is the returned user' + returnedUser, req.user)
  db.snack.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      imgUrl: req.body.imgUrl
    }
  }).then(function([returnedSnack, created]) {
    // Last Step: associating the user to the snack - addSnack()
    // addSnack() is a method generated by Sequelize that uses the name of the model
      returnedUser.addSnack(returnedSnack).then( function(relationInfo) {
        console.log(relationInfo)
        console.log('-----------------------------')
        console.log(`${returnedSnack.name} added to ${returnedUser.name}`)
        res.redirect('/profile')
      })
    })
  })
})



module.exports = router;
// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' '

// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

// middleware

router.get('/snack', isLoggedIn, (req, res) => {
  console.log(isLoggedIn)
  res.render('./snack/snack')
});

router.post('/snack', isLoggedIn, (req, res) => {
  //refactored redundant route  
  db.snack.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      imgUrl: req.body.imgUrl
    }
  }).then(([returnedSnack, created]) => {
    req.user.addSnack(returnedSnack).then( (relationInfo) => {
      res.redirect('/profile')
    })
  })
})










// exports
module.exports = router;

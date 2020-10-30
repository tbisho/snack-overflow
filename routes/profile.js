// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override')

// middle ware

router.use(methodOverride('_method'))

// routes

router.get('/', isLoggedIn, (req, res) => {
  res.locals.currentUser.getSnacks().then((foundSnacks) => {
    res.render('profile', {snacks: foundSnacks})
  })
})

router.delete('/:id', isLoggedIn, (req, res) => {
  db.snack.findOrCreate({
      where: 
      {
        id: req.params.id
      } 
    }).then(([returnedSnack, created]) => {
      req.user.removeSnack(returnedSnack).then ( (relationInfo) => {
        res.redirect('/profile')
    })
  }) 
}) 

// exports
module.exports = router;


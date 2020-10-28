const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.get('/:id', isLoggedIn, (req, res) => {
  db.snack.findOne(
    {
      where: {
        id: req.params.id
      }
    }).then((foundSnack) => {
      console.log('THE SNACK IS *drum roll*: ', foundSnack)
      res.render('./snack/detail', {snack: foundSnack })
    })
  })
  // rather than return all snacks I want to find one snack
  // so that would be findOne()
  // findOne() by where {id: req.params.id}
  // .then((foundSnack) => {
  // res.render('./snack/detail') 
// })
  // so I can't copy the method from profile.
//   res.locals.currentUser.getSnacks().then((foundSnacks) => {
//     res.render('./snack/detail', {snacks: foundSnacks})
//   })
// })

module.exports = router;
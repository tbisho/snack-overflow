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
      },
      include: [db.comment]
    }).then((snackDetails) => {
      res.render('./snack/detail', {snack: snackDetails })
    })
  })

router.put('/:id', isLoggedIn, (req, res) => {
  db.snack.update(
    {
      description: req.body.description,
      imgUrl: req.body.imgUrl
    }).then((rowsUpdated) => {
      
    })
})

module.exports = router;
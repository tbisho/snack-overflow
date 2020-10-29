const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

router.post('/:id',isLoggedIn, (req,res) => {
  //find a snack by id where:,.
  db.snack.findOne({
      where: {
          id: req.params.id
      }
  }).then((foundSnack) => {
      console.log(foundSnack)
      //comment is new
      db.comment.create({
          text: req.body.text,
          snackId: req.params.id,
          userId: req.user.id
      }).then((createdComment) => {
          console.log(createdComment)
          foundSnack.addComment(createdComment)
          req.user.addComment(createdComment)
          res.redirect(`/detail/${req.params.id}`)
      }).catch(error => {
          console.log(error)
          res.send(error)
      })
  })
})


module.exports = router;
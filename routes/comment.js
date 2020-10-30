// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

// middleware

// routes

router.post('/:id', isLoggedIn, (req,res) => {
  db.snack.findOne({
      where: 
      {
        id: req.params.id
      }
  }).then((foundSnack) => {
      db.comment.create({
          text: req.body.text,
          snackId: req.params.id,
          userId: req.user.id
      }).then((createdComment) => {
        //   console.log(createdComment)
          foundSnack.addComment(createdComment)
          req.user.addComment(createdComment)
          console.log(createdComment)
          res.redirect(`/detail/${req.params.id}`)
      }).catch(error => {
          res.send(error)
      })
  })
})

// exports

module.exports = router;

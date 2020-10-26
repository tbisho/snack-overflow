const express = require('express');
const router = express.Router();
const db = require('../models');
const methodOverride = require('method-override')
const isLoggedIn = require('../middleware/isLoggedIn');

router.use(methodOverride('_method'))

router.delete('/profile', isLoggedIn, (res, req) => {
  //Need to verify a way to ensure that the SNACK is getting deleted
  // maybe req.body.snack.id or req.body.snack.name
  // const deleteSnack = req.body.name;
  // console.log(deleteSnack)
  // db.snack.destroy({
  //   where: {name: deleteSnack}
  // let foundUser = db.user.findOrCreate
  // }).then( () => {
  //   res.redirect('/profile');
  // });
});

module.exports = router;
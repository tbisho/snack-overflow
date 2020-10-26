// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' ' 
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');


router.get('/snack', (req, res) => {
  res.render('./snack/snack')
});

router.post('/profile', (req, res) => {
  // we will allow the user to db.findOrCreate
  // {where the constraint is by name}
  // with snack:name
  // snack:description
  // snack:imgUrl
})
module.exports = router;
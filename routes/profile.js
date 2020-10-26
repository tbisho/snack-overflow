// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' ' 
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');


/*I want to display a list of snacks connected to logged in user
I want the 'snacks.name' FROM snacks WHERE the userID (in users_snacks) = 'user.Id'
SELECT s.name
FROM snacks s, users u, user_snacks us
WHERE u.id = us.user.id; */


// //GET 'users' favorite snacks to display on profile
router.get('/profile', isLoggedIn, (req, res) => {
    console.log(res.locals.currentUser)
    res.locals.currentUser.getSnacks().then((foundSnacks) => {
        res.render('profile', {snacks: foundSnacks})
        })
    })


module.exports = router;
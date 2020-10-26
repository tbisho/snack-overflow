// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' ' 
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');


/*I want to display a list of snacks connected to logged in user
I want the 'snacks.name' FROM snacks WHERE the userID (in users_snacks) = 'user.Id'
SELECT s.name
FROM snacks s, users u, user_snacks us
WHERE u.id = us.user.id; */


//GET 'users' favorite snacks to display on profile
// router.get('/profile', (req, res) => {
//     console.log(req.user.id)
//     //req.user get the current user??   
//     //need to findAll() snacks connected to user
//     //SELECT snacks.name FROM snacks where user.snacks.userID = 'same as logged in user'
//     //.then( usersFavorites => {
//         //render this to the profile page
//         //res.render('profile', {snacks: usersFavorites})
//     })
// })

router.get('/profile', (req, res) => {
    console.log(req.user)
})


module.exports = router;
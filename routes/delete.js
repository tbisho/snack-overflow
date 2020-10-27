// AirBnB JavaScript Guide:
//  use arrow functions on anonymous functions
// single qoutations ' '

// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override')

// middleware
// router.use(express.urlencoded({ extended: false }));
router.use(methodOverride('_method'))

// routes

router.delete('/:id', isLoggedIn, (req, res) => {
  console.log("---, ", req.params, req.query)
  db.snack.find( 
    {
      where: {
          id: req.params.id
      } 
    }).then(([returnedSnack, created]) => {
      req.user.removeSnack(returnedSnack).then ( (relationInfo) => {
        res.redirect('/profile')
      })
    })  
  // db.snack.destroy({
  //   where: {  }
  // }).then( () => {
  //   res.redirect('/profile');
  // });
});



// router.get('/profile/:id', isLoggedIn, (res, req) => {
//   console.log("Something stupid ", req.params)
//   res.locals.currentUser.getSnacks().then((foundSnacks) => {
//     db.user_snack.destroy({
//       where: {
//         snackId: req.params.snackId
//       }
//     }).then ( () => {
//       res.redirect('/profile')
//     })
//   })
  // const findSnack = req.params.id
  // hard code to delete a certain thing
  // do we need to have res.locals.currentUser
  // If isLoggedIn is in the callback function, but isLoggedIn is not defined
  // below, does it know that there is a current user logged in? And is that
  // why when we try to delete, the values come back
  // db.user_snack.destroy({
  //     where: { 
  //       id: 2
  //     }
  //   }).then( () => {
  //     res.render('/profile');
  //   });
  });


// exports
module.exports = router;
// let loggedIn = res.locals.currentUser
// console.log(loggedIn)
// res.redirect('/')

// loggedIn.getUser_snacks().then((foundSnacks) =>{
//   console.log(foundSnacks)
// })
// const deleteSnack = req.params.id;
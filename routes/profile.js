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

// middle ware

router.use(methodOverride('_method'))

// routes



router.get('/', isLoggedIn, (req, res) => {
  res.locals.currentUser.getSnacks().then((foundSnacks) => {
    res.render('profile', {snacks: foundSnacks})
  })
})

router.delete('/:id', isLoggedIn, (req, res) => {
  db.snack.findOrCreate( 
    {
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

// If the method findOne versus findOrCreate is used it throws the following:
// (node:130386) UnhandledPromiseRejectionWarning: TypeError: undefined is not a function
//     at /home/mcarbonell/sei/project2/snack-overflow/routes/profile.js:36:13
//     at processTicksAndRejections (internal/process/task_queues.js:93:5)
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:130386) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
// (node:130386) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
// So if we use findOne vs findOrCreate then we need to switch line 36 probably with the .then([returnedSnack, created])
// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/detail/:id', isLoggedIn, (req,res) => {
    //render the comment on a particular snack id page
        // by comment id?
    //render 

})

// add a route that will post comments to the specific snack detail page
router.post('/detail/:id',isLoggedIn, (req,res) => {
    //check to see if the comment is being sent to the route
        //is this the right route?
    // console.log
    // find or create or just create a comment in the db
        //where user:logged in
        //where snack: current snack
        //where comment: req.body.content?
    // render that comment on the page
    // redirect back to snack details
    
})

module.exports = router;
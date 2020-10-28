// requirements
const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

// router.get('/detail/:id', isLoggedIn, (req,res) => {
//     //render the comment on a particular snack id page
//         // by comment id?
//     // redirect back to details?
//     db.comment.findOrCreate({
//             where:{
//                 text:'this snack is the bomb.com!',
//             }
//         }).then(function([newComment]){
//             console.log(newComment)
//     })
// })

// add a route that will post comments to the specific snack detail page
router.post('/:id',isLoggedIn, (req,res) => {
    //find a snack by id where:,.
    db.snack.findOrCreate({
        where: {
            id: req.params.id
        }
    }).then(function([foundSnack]){
        console.log(foundSnack)
        //comment is new
        db.comment.create({
            text: req.body.text,
            snackId: req.params.id,
            userId: req.user.id
        }).then(function(createdComment){
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

//check to see if the comment is being sent to the route
        //is this the right route?
    // console.log
    // find or create or just create a comment in the db
        //where user:logged in
        //where snack: current snack
        //where comment: req.body.content?
    // render that comment on the page
    // redirect back to snack details
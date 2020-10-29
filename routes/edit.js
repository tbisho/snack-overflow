const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

// how do I hit this route why do I not know?
router.post('/:id', isLoggedIn, (req,res) =>{
// find a snack
// update the snack ImgURl Attribute by adding in a new url 
db.snack.findOrCreate({
    where:{
        id: req.params.id,
        //can we update the image here from the text field?
        imgUrl: req.params.id
    }
        }).then(([foundSnack])=> {
        console.log(foundSnack)
        res.redirect('/profile')
        })
    })













module.exports = router;
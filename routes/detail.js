const express = require('express');
const db = require('../models');
const router = express.Router();
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/:id', isLoggedIn, (req, res) => {
        console.log(req.params.id)
        //find a snack by id
        db.snack.findOrCreate({
            where: {
                id: req.params.id
            }
            //render that snack details on details page
        }).then(function([snackDetails]){
            res.render('snack/detail', {snack: snackDetails})
        })
    
    }) 

    module.exports = router;
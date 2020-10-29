// requirements
const express = require('express');
const db = require('../models')
const router = express.Router();
const passport = require('../config/ppConfig');

// routes
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  db.user.findOrCreate({
    where: {
      email: req.body.email
    }, defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      passport.authenticate('local', {
        successRedirect: '/snack',
        successFlash: 'Account created and logged in'
      })(req, res);
    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  }).catch(error => {
    req.flash('error', error.message);
    res.redirect('/auth/signup');
  });
})

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password',
  successFlash: 'You have logged in'
}));

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have logged out');
  res.redirect('/');
});

// exports
module.exports = router;

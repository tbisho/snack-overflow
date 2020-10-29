// requirements
require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOverride = require('method-override')
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// routes

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/create'));
app.use('/profile',require('./routes/profile'));
app.use('/comment', require('./routes/comment'))
app.use('/detail', require('./routes/detail'));

// server
var server = app.listen(process.env.PORT || 3000, ()=> console.log(`nomnomnom on port ${process.env.PORT || 3000}`));

// exports
module.exports = server;
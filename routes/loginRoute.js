// app/routes.js
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function (req, res) {
    res.render('admin/login', {
        title: 'login',
        message: req.flash('loginMessage')
    });
});

// process the login form
router.post('/', passport.authenticate('local-login', {
    successRedirect: '/conno/dashboard', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
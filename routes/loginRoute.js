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

// router.post('/', passport.authenticate('local-login', {
//     successRedirect: '/conno/admin/dashboard',
//     failureRedirect: '/',
//     failureFlash: true // allow flash messages
// }));

router.post('/', passport.authenticate('local-login', {
	failureRedirect : '/',
	failureFlash : false // allow flash messages
}), function(req, res, next)  {
    console.log('dsahugdsadg ' + req.user.role)
    if(req.user.role == 0){
        res.redirect('/conno/admin/dashboard')
    }
    if(req.user.role == 1){
        res.redirect('/conno/user/table')
    }
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
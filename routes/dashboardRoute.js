const express = require('express');
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

var dashboard = require('../controllers/dashboardControll');

router.get('/dashboard', function(req, res, next){
    if(req.isAuthenticated()){
        dashboard.getDashboard;
    }else{
        res.send('ban chua dang nhap')
    }
});

module.exports = router;
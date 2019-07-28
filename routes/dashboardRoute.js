const express = require('express');
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

var dashboard = require('../controllers/dashboardControll');

// router.get('/dashboard', (req, res)=>{
//     if(req.isAuthenticated()){
//         dashboard.getDashboard;
//     }else{
//         res.redirect('/')
//     }
// });
router.get('/dashboard', dashboard.getDashboard);

module.exports = router;
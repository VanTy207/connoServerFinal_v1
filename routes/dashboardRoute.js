const express = require('express');
const router = express.Router();
const { isLogin, unIsLogin } = require('../config/auth');

var dashboard = require('../controllers/dashboardControll');

router.get('/dashboard', isLogin, dashboard.getDashboard);

module.exports = router;
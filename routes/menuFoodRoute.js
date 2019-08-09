const express = require('express');
const router = express.Router();
const { isLogin, unIsLogin } = require('../config/auth');

var menufoods = require('../controllers/menuFoodsControll');

router.get('/menuorder', isLogin,  menufoods.getMenuFoods);

module.exports = router;
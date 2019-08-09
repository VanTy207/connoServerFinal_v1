const express = require('express');
const router = express.Router();
const { isLogin, unIsLogin } = require('../config/auth');

var detailOrder = require('../controllers/orderControll');

router.get('/order/detail/:id/:tt', isLogin,  detailOrder.getByIdDetailOrder);
router.post('/order/detail/:idban/:matt/:idhd', isLogin, detailOrder.saveTotalOrder);

module.exports = router;
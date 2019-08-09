const express = require('express');
const router = express.Router();

const {isLogin, unIsLogin} = require('../config/auth');
var doanhthu = require('../controllers/doanhthuControll');

router.get('/doanhthu',isLogin, doanhthu.getDoanhThu);
router.get('/doanhthu/detail/:id',isLogin, doanhthu.detailDoanhThu);
router.post('/doanhthu/detail/:id1/:id2',isLogin, doanhthu.saveDoanhThu);

module.exports = router;
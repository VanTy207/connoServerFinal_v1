const express = require('express');
const router = express.Router();

const {isLogin, unIsLogin} = require('../config/auth');
var bill = require('../controllers/billControll');

router.get('/bill',isLogin, bill.getBills);
router.get('/bill/phieunhap/detail/:id',isLogin, bill.PhieuNhap);
router.post('/bill/phieunhap/detail/:id/:idpn', isLogin, bill.savePhieuNhap);
router.get('/bill/phieuxuat/detail/:id', isLogin, bill.PhieuXuat);

module.exports = router;
const express = require('express');
const router = express.Router();

const {isLogin, unIsLogin} = require('../config/auth');
var nhanvien = require('../controllers/nhanvienControll');

router.get('/nhanvien',isLogin, nhanvien.getAllNhanVien)
router.get('/nhanvien/:id',isLogin, nhanvien.getByIdNhanVien)
router.post('/nhanvien/add', isLogin, nhanvien.addNhanVien)
router.post('/nhanvien/:id', isLogin, nhanvien.updateNhanVien)
router.get('/nhanvien/delete/:id',isLogin, nhanvien.deleteNhanVien);

module.exports = router;
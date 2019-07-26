const express = require('express');
const router = express.Router();

var nhanvien = require('../controllers/nhanvienControll');

router.get('/nhanvien', nhanvien.getAllNhanVien)
    .get('/nhanvien/:id?', nhanvien.getByIdNhanVien)
    .post('/nhanvien/add', nhanvien.addNhanVien)
    .put('/nhanvien/update/:id?',nhanvien.updateNhanVien)
    .delete('/nhanvien/delete/:id?', nhanvien.deleteNhanVien);
    
module.exports = router;
const express = require('express');
const router = express.Router();
const { isLogin, unIsLogin } = require('../config/auth');

var table = require('../controllers/tableControll');

router.get('/table', isLogin,  table.getTable);
router.get('/table/detail/:id1/:id2', isLogin, table.detaiFood2);

module.exports = router;
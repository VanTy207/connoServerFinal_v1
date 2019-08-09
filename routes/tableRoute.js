const express = require('express');
const router = express.Router();
const { isLogin, unIsLogin } = require('../config/auth');

var table = require('../controllers/tableControll');

router.get('/table', isLogin,  table.getTable);

module.exports = router;
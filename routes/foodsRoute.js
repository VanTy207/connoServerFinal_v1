const express = require('express');
const router = express.Router();
const { isLogin, unIsLogin } = require('../config/auth');

var cart = require('../controllers/cartControll');

router.get('/foods', isLogin,  cart.getFoods);
router.get('/foods/add/:id', isLogin, cart.addFood);
router.get('/foods/remove/:id', isLogin, cart.removeFood);
router.get('/foods/detail/cart', isLogin, cart.detailCart);


module.exports = router;
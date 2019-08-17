var Cart = require('../models/cart');
var products = require('../models/foods');

exports.getFoods = function (req, res, next) {
    var sess = req.session.passport.user;
    products.allFoods((err, rows) => {
        if (err) {
            res.JSON(err);
        }
        else {
            obj = JSON.parse(JSON.stringify(rows));
            res.render('users/foods', {
                title: 'menu foods',
                role: sess.role,
                idmon: obj.idmon,
                tenmon: obj.tenmon,
                hinhanh: obj.hinhanh,
                giamon: obj.giamon,
            });
        }
    })
}

exports.addFood = function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    products.findProduct(productId, function (err, rows) {
        if (err) {
            res.redirect('/conno/user/foods');
        }
        else {
            cart.add(rows[0], productId);
            req.session.cart = cart;
            console.log('cart: ');
            console.log(req.session.cart);
            res.redirect('/conno/user/foods');
        }
    })
}

exports.detailCart = function (req, res, next) {
    if (!req.session.cart) {
        return res.render('users/detail_foods', { 
            products: null 
        });
    }
    else {
        let cart = new Cart(req.session.cart);
        res.render('users/detail_foods', {
            title: 'NodeJS Shopping Cart',
            products: cart.getItems(),
            totalPrice: cart.totalPrice
        })
    }
}

exports.removeFood = function (req, res, next) {
    let productId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.remove(productId);
    req.session.cart = cart;
    res.redirect('/conno/user/foods/detail/cart');
}

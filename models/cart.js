module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, giamon: 0};
        }
        cartItem.quantity++;
        cartItem.giamon = cartItem.item.giamon * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.giamon;
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].giamon;
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        console.log('mang: ');
        console.log(arr);
        return arr;
    };
};
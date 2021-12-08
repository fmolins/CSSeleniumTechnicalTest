const Page = require('./page');

class CartPage extends Page {
    
    get productsInCart() {
        return $('//table[@id="shopping-cart-table"]/tbody/tr');
    }
}

module.exports = new CartPage();
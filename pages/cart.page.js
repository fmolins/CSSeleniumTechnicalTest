const Page = require('./page');

class CartPage extends Page {
    
    get productsInCart() {
        return $$('//table[@id="shopping-cart-table"]/tbody/tr');
    }

    async isProductInCart(productName){
        let products = await this.productsInCart;
        let productAddedName = '';
        let result = false;
        for (let product of products){
            productAddedName = await product.$('//td[@class="product-cart-info"]/h2[@class="product-name"]/a').getText();
            if (productAddedName.toLowerCase() == productName.toLowerCase()){
                result = true;
                return result;
            }
        }
        return result;
    }

}

module.exports = new CartPage();
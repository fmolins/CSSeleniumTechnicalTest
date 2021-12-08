const HomePage = require('../../pages/home.page');
const SearchResultsPage = require('../../pages/search_results.page');
const ProductPage = require('../../pages/product.page');
const CartPage = require('../../pages/cart.page');

describe('Search product and add to cart', () => {
    it('should search by "shirt", find and open the "Slim Fit Dobby Oxford Shirt" product, select a color and size, and add it to cart', async () => {
        let productName = 'Slim Fit Dobby Oxford Shirt';
        await HomePage.searchBy('shirt');
        await SearchResultsPage.viewDetailsOfElement(productName);
        await ProductPage.selectColor('BLUE');
        await ProductPage.selectSize('XL');
        await ProductPage.addToCart();
        await expect(CartPage.successMessages).toExist();
        let productsInCart = await CartPage.productsInCart;
        await expect(productsInCart.length).toEqual(1);
        let productIsInCart = await CartPage.isProductInCart(productName);
        await expect(productIsInCart).toEqual(true);
    });
});
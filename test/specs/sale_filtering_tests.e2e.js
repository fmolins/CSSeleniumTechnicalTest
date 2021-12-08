const HomePage = require('../../pages/home.page');
const ResultsPage = require('../../pages/results.page');

describe('Go to "Sale > View all Sale" page and filters by price', () => {
    it('should perform a hover on the "Sale" option, click at "View all Sale" option, filter by price ($100.00 - $199.99), and check if it\'s filtered', async () => {
        await HomePage.goToSalesViewAllSales();
        await ResultsPage.filterByOption(ResultsPage.filterOptions.price, ResultsPage.priceOptions.up_to_two_hundred);
        let prices = await ResultsPage.getResultsPrices();
        let numPrice;
        await expect(prices.length).toEqual(2);
        for (price of prices){
            console.log("Price: " + price);
            numPrice = parseFloat(price);
            await expect(numPrice).toBeGreaterThanOrEqual(100.00);
            await expect(numPrice).toBeLessThanOrEqual(199.99);
        }
    });
});
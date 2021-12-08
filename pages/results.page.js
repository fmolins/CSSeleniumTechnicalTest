const Page = require('./page');

const filterOptions = {category:1, type:2, bed_bath:3, color:4, decor_type:5, fit:6, gender:7, home_decor:8, price:12}
const priceOptions = {up_to_two_hundred: 1, more_than_two_hundred:2}
class ResultsPage extends Page {
    
    get results() {
        return $$('//ul[contains(@class,"products-grid")]/li');
    }

    get filterOptionsMenu() {
        return $('#narrow-by-list');
    }

    get filterOptions() {
        return filterOptions;
    }

    get priceOptions() {
        return priceOptions;
    }

    async findElementByName(elementName){
        let resultsList = await this.results;
        let resultName = "";
        for (let result of resultsList){
            resultName = await result.$('./div[@class="product-info"]/h2[@class="product-name"]/a').getAttribute('title');
            if (resultName.toLowerCase() == elementName.toLowerCase()){
                return result;
            }
        }
        return null;
    }

    async viewDetailsOfElement(elementName) {
        let element = await this.findElementByName(elementName);
        await element.$('./div[@class="product-info"]/div[@class="actions"]/a[@class="button"]').click();
    }

    async filterByOption(filteredField, fieldFilterOption) {
        let filterOptions = await this.filterOptionsMenu;
        let selectedOption = await filterOptions.$('./dd[' + filteredField + ']/ol/li[' + fieldFilterOption + ']/a');
        await selectedOption.scrollIntoView();
        await selectedOption.click();
    }

    async getResultsPrices() {
        let products = await this.results;
        let prices = [];
        let spanRegularPrice;
        let price;
        for (let product of products){
            price = await product.$('./div[@class="product-info"]/div/p[@class="special-price"]/span[@class="price"]').getText();
            prices.push(price.replace('$', ''));
        }
        return prices;
    }
}

module.exports = new ResultsPage();
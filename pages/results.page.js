

const Page = require('./page');

class SearchResultsPage extends Page {
    
    get results() {
        return $$('//ul[contains(@class,"products-grid")]/li');
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
        let filterOptions = await this.filterOptions;
        let selectedOption = await filterOptions.$('./dt[' + filteredField + ']/ol/li[' + fieldFilterOption + ']/a');
        await selectedOption.moveTo();
        await selectedOption.click();
    }
}

module.exports = new SearchResultsPage();
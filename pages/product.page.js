const Page = require('./page');

class ProductPage extends Page {
    
    get colorSelector() {
        return $('#attribute92');
    }

    get sizeSelector() {
        return $('#attribute180');
    }

    get addToCartButton() {
        return $('//div[@class="add-to-cart-buttons"]/button');
    }

    async selectColor(colorName){
        await this.colorSelector.click();
        let colorsResults = await this.colorSelector.$$('./option');
        let resultColorName = '';
        for (let color of colorsResults){
            resultColorName = await color.getText();
            if (resultColorName.toLowerCase() == colorName.toLowerCase()){
                await color.click();
                break;
            }
        }
    }

    async selectSize(sizeToSelect){
        await this.sizeSelector.click();
        let sizeResults = await this.sizeSelector.$$('./option');
        let sizeName = '';
        for (let size of sizeResults){
            sizeName = await size.getText();
            if (sizeName.toLowerCase() == sizeToSelect.toLowerCase()){
                await size.click();
                break;
            }
        }
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}

module.exports = new ProductPage();

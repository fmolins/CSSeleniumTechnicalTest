const loginOptionPosition = 6;
const navOptions = {women:1, men:2, accessories:3, home_and_decor:4, sale:5, vip:5}
/**
@abstract
*/
module.exports = class Page {
    
    get accountMenu() {
        return $('//a[@data-target-element="#header-account"]');
    }

    get errorMessages() {
        return $('//ul[contains(@class,"messages")]/li[contains(@class,"error-msg")]');
    }

    get successMessages() {
        return $('//ul[contains(@class,"messages")]/li[contains(@class,"success-msg")]');
    }

    get searchBar() {
        return $('#search');
    }

    get searchButton() {
        return $('//div[@class="input-box"]/button[contains(@class,"search-button")]');
    }

    get navMenu() {
        return $('#nav');
    }

    async clickOnAccountMenuOption(optionPosition){
        return $('//div[@id="header-account"]/div/ul/li[' + optionPosition + ']/a').click();
    }

    async goToLoginPage () {
        await this.accountMenu.click();
        await this.clickOnAccountMenuOption(loginOptionPosition);
    }

    async searchBy(textToSearch) {
        await this.searchBar.setValue(textToSearch);
        await this.searchButton.click();
    }

    async goToSalesViewAllSales() {
        let navMenu = this.navMenu;
        await navMenu.$('./ol/li[' + navOptions.sale + ']').moveTo();
        await navMenu.$('./ol/li[' + navOptions.sale + ']/a').click();
    }
}
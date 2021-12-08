const loginOptionPosition = 6;
/**
@abstract
*/
module.exports = class Page {
    
    get accountMenu() {
        return $('//a[@data-target-element="#header-account"]');
    }

    get searchBar() {
        return $('#search');
    }

    get searchButton() {
        return $('//div[@class="input-box"]/button[contains(@class,"search-button")]');
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
}

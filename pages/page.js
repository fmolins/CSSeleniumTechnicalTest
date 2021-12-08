const loginOptionPosition = 6;
/**
@abstract
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     get accountMenu() {
        return $('//a[@data-target-element="#header-account"]');
    }

    get accountMenuLoginOption() {
        return $('//div[@id="header-account"]/div/ul/li[' + loginOptionPosition + ']/a');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    async goToLoginPage () {
        await this.accountMenu.click();
        await this.accountMenuLoginOption.click();
    }
}



const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {
        return $('#email');
    }

    get emailValidation() {
        return $('#advice-required-entry-email');
    }

    get inputPassword() {
        return $('#pass');
    }

    get passwordValidation() {
        return $('#advice-required-entry-pass');
    }

    get btnSubmit() {
        return $('#send2');
    }

    get errorMessages() {
        return $('//ul[contains(@class,"messages")]/li[contains(@class,"error-msg")]');
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /*async areThereAnyErrors(){
        let areThereErrors = await this.errorMessages.isExisting();
        console.log("There are any errors: " + areThereErrors);
        return areThereErrors;
    }*/
}

module.exports = new LoginPage();

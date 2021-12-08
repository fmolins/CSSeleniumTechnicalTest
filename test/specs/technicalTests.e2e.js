const LoginPage = require('../../pages/login.page');
const HomePage = require('../../pages/home.page');

describe('Login with invalid data and check error', () => {
    it('should try login and check if there is an error displayed', async () => {
        await HomePage.goToLoginPage();
        await LoginPage.login('test@test.com', 'ThisIs@T3st');
        await expect(LoginPage.errorMessages).toExist();
    });
});

describe('Empty login and check validation', () => {
    it('should try an empty login and check if there are validations for each field displayed', async () => {
        await HomePage.goToLoginPage();
        await LoginPage.login('', '');
        await expect(LoginPage.emailValidation).toExist();
        await expect(LoginPage.passwordValidation).toExist();
    });
});
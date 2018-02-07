/*eslint-disable*/

import LoginElements from '../../elements/login/login-elements';

const loginElements = new LoginElements();

var https = require("https");

exports.actions = {
    async clickLoginMenuItem(t) {
        await t.click(loginElements.loginMenuButton);
    },
    async enterUsername(t, username) {
        await t.typeText(loginElements.usernameInput, username, { replace: true });
    },
    async enterPassword(t, password) {
        await t.typeText(loginElements.passwordInput, password, { replace: true });
    },
    async clickLoginButton(t) {
        await t.click(loginElements.loginButton);
    },
    async checkErrorMessageIsPresent(t) {
        await t.expect(loginElements.errorMessage.visible).ok();
        await t.expect(loginElements.errorMessage.textContent).contains(loginElements.errorMessageText);
    },
    async pingJustPark(t) {
        const status = await new Promise((resolve) => {
            https.get('https://justpark.com/', function (res) {
                resolve(JSON.stringify(res.statusCode));
            });
        });
        await t.expect(status).eql('200');
    },
};

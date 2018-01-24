import LoginElements from '../../elements/login/login-elements';

const loginElements = new LoginElements();

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
};

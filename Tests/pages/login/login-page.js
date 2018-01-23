import LoginElements from '../../elements/login/login-elements';

const loginElements = new LoginElements();

exports.actions = {
    async enterUsername(t, username) {
        await t.typeText(loginElements.usernameInput, username, { replace: true });
    },
    async enterPassword(t, password) {
        await t.typeText(loginElements.passwordInput, password, { replace: true });
    },
    async clickButton(t) {
        await t.click(loginElements.loginButton);
    },
    async checkUsernameIsPresent(t, username) {
        await t.expect(loginElements.username.visible).ok();
        await t.expect(loginElements.username.textContent).contains(username);
    },
};

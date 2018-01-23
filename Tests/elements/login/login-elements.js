import { Selector } from 'testcafe';

export default class LoginElements {
    constructor() {
        this.usernameInput = Selector('div.login-left > input');
        this.passwordInput = Selector('div.login-right > input');
        this.loginButton = Selector('div.login-button-container > button');
        this.username = Selector('div.widget-item.header-account-widget > div.cf > div > h3');
    }
}

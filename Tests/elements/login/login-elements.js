import { Selector } from 'testcafe';

export default class LoginElements {
    constructor() {
        this.loginMenuButton = Selector('.c-header__menu--login-link');
        this.usernameInput = Selector('#id_username');
        this.passwordInput = Selector('#id_password');
        this.loginButton = Selector('.modal-footer > button');
        this.errorMessage = Selector('#alerts > div:nth-child(2)');
        this.errorMessageText = 'Incorrect username and / or password';
    }
}

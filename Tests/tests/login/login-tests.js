/*eslint-disable*/

import login from '../../pages/login/login-page';
import accounts from '../../helpers/account-helper';

fixture`Login Test`
    .page`https://plus.betway.com/`
    .beforeEach( async t => {
        await t.resizeWindow(1920, 1080)
        await t.setTestSpeed(1)
    })

test('Player is able to successfully login with valid credentials', async t => {
    await login.actions.enterUsername(t, accounts.loginuser.username);
    await login.actions.enterPassword(t, accounts.loginuser.password);
    await login.actions.clickButton(t);
    await login.actions.checkUsernameIsPresent(t, accounts.loginuser.username);
});

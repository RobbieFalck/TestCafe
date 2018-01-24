/*eslint-disable*/

import login from '../../pages/login/login-page';
import accounts from '../../helpers/account-helper';

fixture`Login Test`
    .page`https://justpark.com/`
    .beforeEach( async t => {
        await t.resizeWindow(1024, 768)
        await t.setTestSpeed(1)
    })

test('Player is able to see an error message when logging in with invalid credentials', async t => {
    await login.actions.clickLoginMenuItem(t);
    await login.actions.enterUsername(t, accounts.logininvaliduser.username);
    await login.actions.enterPassword(t, accounts.logininvaliduser.password);
    await login.actions.clickLoginButton(t);
    await login.actions.checkErrorMessageIsPresent(t);
});

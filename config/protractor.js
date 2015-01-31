exports.config =
{
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function()
	{
		browser.driver.get('http://caio.dev:3000/#/auth');
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field'))
			.sendKeys('blabla');
		browser.driver.findElement(by.id('password'))
			.sendKeys('blabla');
		browser.driver.findElement(by.name('commit')).click();
	}
};
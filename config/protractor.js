exports.config =
{
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function()
	{
		var config = require('../app/config/config.js')();
		browser.driver.get('http://caio.dev:3000/#/auth');
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field'))
			.sendKeys(config.seleniumUser);
		browser.driver.findElement(by.id('password'))
			.sendKeys(config.seleniumUserPassword);
		browser.driver.findElement(by.name('commit')).click();
	}
};
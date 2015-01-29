// contatos
describe('Pagina principal', function()
{
	beforeEach(function()
	{
		browser.get("http://caio.dev:3000/#/contatos")
	});
	it('o usuario deve estar logado', function()
	{
		element(by.id('usuario-logado')).getText()
			.then(function(texto)
			{
				expect(texto.trim.length).toBeGreaterThan(0);
			});

	});
});
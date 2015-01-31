// contatos
var ContatosPage = require('./pages/contatosPage');
describe('Pagina principal: '
, function()
	{
		var pagina = new ContatosPage();
		beforeEach(function()
		{
			pagina.visitar();
		});
		it('o usuario deve estar logado', function()
		{
			pagina.obterUsuarioLogado()
				.then(function(texto) {	expect(texto.trim().length).toBeGreaterThan(0); });
		});

		it('deve remover o contato'
			,	function()
			{
				var totalAntes = pagina.obterTotalLista();

				pagina.removerPrimeiroLista();

				var totalDepois = pagina.obterTotalLista();
				// deve ser menor do que antes
				expect(totalDepois).toBeLessThan(totalAntes);

			});
	});
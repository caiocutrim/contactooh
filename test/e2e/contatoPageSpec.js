// contato
var ContatoPage = require('./pages/contatoPage'); //funcao construtora
describe('Formulário:'
, function()
	{
		var pagina = new ContatoPage();

		beforeEach(function()
		{
			pagina.visitar();
		});
		it('Deve cadastrar e enviar pra base de dados'
			, function()
		{
			var aleatorio = Math.floor((Math.random() * 10000000) + 1);
			var nome = 'teste '+ aleatorio;
			var email ='teste'+ aleatorio +'@gmail.com';
			pagina.digitarNome(nome);
			pagina.digitarEmail(email);
			pagina.primeiraEmergencia();
			pagina.salvar();

			// verifica se há mensagem de sucesso retornada pela promisse
			expect(element(by.binding('mensagem.texto')).getText())
				.toContain('sucesso')
			;
			// se tiver o teste é concluido com exito
		});


	});
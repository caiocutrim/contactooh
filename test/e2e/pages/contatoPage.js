/**
 * Padrão page object que usa funcoes(objetos de alto nivel)
 * para manipulacao de DOM.
 * Ele procura esconder os detalhes da interface do usuario para
 * outros componentes do sistema, neste caso os scripts de teste
 */
var contatoPage = function()
{
	this.visitar = function()
	{
		browser.get('http://localhost:3000/#/contato');
	};

	this.digitarNome = function(nome)
	{
		element(by.model('contato.nome')).sendKeys(nome);
	};

	this.digitarEmail = function(email)
	{
		element(by.model('contato.email')).sendKeys(email);
	};

	this.obterMensagem = function()
	{
		return element(by.binding('mensagem.text')).getText();
	};

	this.primeiraEmergencia = function()
	{
		element(by.css('option[value="0"]')).click();
	};

	this.salvar = function()
	{
		element(by.css('.btn-primary')).click();
	};
};

module.exports = contatoPage;
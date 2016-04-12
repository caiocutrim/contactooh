//app/routes/contatos
/**
 * [funcao responsavel pela validacao
 * do login de usuario no sistema]
 * @param  {[string]}
 * @param  {[json]}
 * @param  {Function}
 */
function verificaAutenticacao(req,res,next) {
if(req.isAuthenticated()) {
		return next();
	}
	else {
		res.status('401').json('Não autorizado');
	}
}
module.exports = function(app){

	var controller = app.controllers.contato;
	// listar contatos
	app.route('/contatos')
		.get(verificaAutenticacao, controller.listaContato) //lista todos os contatos
		.post(verificaAutenticacao, controller.salvaContato)//salva o contato
	;

	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato) //lista contato específico
		.delete(verificaAutenticacao, controller.removeContato) //deleta contato
	;
}

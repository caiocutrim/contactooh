//app/routes/contatos
module.exports = function(app){
	var controller = app.controllers.contato;
	// listar contatos
	app.route('/contatos')
		.get(controller.listaContato)
		.post(controller.salvaContato)
	;

	app.route('/contatos/:id')
		.get(controller.obtemContato) //lista contato específico
		.delete(controller.removeContato) //deleta contato
	;
}
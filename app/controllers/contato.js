// app/controllers/contato
module.exports = function(app){
	var controller = {};
	var Contato = app.models.contato;
	

	// lista todos os contatos
	controller.listaContato = function(req,res){
		Contato.find().exec()
			.then(
				function(contatos){
					res.json(contatos);
				}
			, function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}	
			)
		;
	};

	// pega o contato e lista pelo contato:id
	controller.obtemContato = function(req, res){
		var _id = req.params.id;
		Contato.findById(_id).exec()
			.then(
				function(contato){
					if(!contato) throw new Error("Contato não encontrado");
					res.json(contato)
				}
			,	function(erro){
					console.log(erro);
					res.status(404).json(erro);
			}	
			)
		;
	};
	// deleta contato
	controller.removeContato = function(req, res){
		var _id = req.params.id;
		Contato.remove({"_id": _id}).exec()
			.then(
				function(){
					res.end();
				}
			, function(erro){
					return console.log(erro);
				}	
			)
		;
	};

	/*
		salva contato ou atualiza, dependedo da existencia de um id
		utilizo uma quebra das regras de rest devido a falta de recursos 
		do verbo put do angular-resources
	*/
	controller.salvaContato = function(req, res){
		var _id = req.body._id;
		if (_id) {
			// se o id for passado como parametro na rota, atualize o contato
			Contato.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(contato){
						res.json(contato)
					}
				,	function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}	
				)
			;
		} else {
			// crie novo contato
			Contato.create(req.body)
				.then(
					function(contato){
						res.status(201).json(contato);
					}
				,	function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}	
				)
		}
	};

	// funcao que adiciona o contato
	function adiciona(contatoNovo){}
	// funcao que atualiza os dados do contato adicionado
	function atualiza(contatoAlterar){}

	return controller; //module of the controller
};
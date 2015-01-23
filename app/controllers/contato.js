// app/controllers/contato
module.exports = function(){
	var controller = {};
	var	contatos = [
				{
						_id: 1
					,	nome : "Caio Pablo Veloso Cutrim"
					,	email: "kaiocoutrim@gmail.com"
				}

			,	{
						_id: 2
					,	nome : "Caroline Veloso Cutrim"
					,	email: "karol_lorak@gmail.com"
				}
			,	{
						_id: 3
					,	nome : "João Batista Veloso Cutrim"
					,	email: "jbcoutrim@gmail.com"
				}
		];
	// futuramente será usado um banco de dados, o mongo db 
	var IND_CONTATO_INC = 3;

	// lista todos os contatos
	controller.listaContato = function(req,res){
		res.json(contatos);
	};

	// pega o contato e lista pelo contato:id
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var	contato 	=	contatos.filter(function(contato){
					return contato._id == idContato;
			})[0]; 
		contato ? res.json(contato) : res.status(404).send('<h1 style="color:red; font-weight=5px">Contato não encontrado nessa bagaça toda</h1');	
	};
	// deleta contato
	controller.removeContato = function(req, res){
		var idContato = req.params.id;
		var	contato 	=	contatos.filter(function(contato){
					return contato._id != idContato; //boolean
			});
		 	res.status(204).end();
	};

	/*
		salva contato ou atualiza, dependedo da existencia de um id
		utilizo uma quebra das regras de rest devido a falta de recursos 
		do verbo put do angular-resources
	*/
	controller.salvaContato = function(req, res){

		var contato = req.body;

		contato = contato.id ? atualiza(contato) : adiciona(contato);
		res.json(contato);
	};

	// funcao que adiciona o contato
	function adiciona(contatoNovo){
		contatoNovo._id = ++IND_CONTATO_INC;
		contatos.push(contatoNovo);
		return contatoNovo;
	}
	// funcao que atualiza os dados do contato adicionado
	function atualiza(contatoAlterar){
		contatos = contatos.map(function(contato){

			if (contato._id == contatoAlterar._id) {
				contato = contatoAlterar;
			}

			return contato;

		});
		
		return contatoAlterar;
	}

	return controller; //module of the controller
};
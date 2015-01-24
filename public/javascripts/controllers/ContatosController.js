/**
 * Controller responsável pelas acões do contato
 * onde o usuário terá acesso aos contatos referentes a sua
 * conta e inteiramente responsável pelos seus dados
 * @return {[response]}
 */
angular.module('contatooh').controller('ContatosController',
	function(Contato,$scope){
		$scope.contatos = [];
		$scope.total = 0;
		$scope.filtro = '';
		$scope.mensagem = {texto:''};
		$scope.incrementa = function(){
			$scope.total ++;
		};

		// Funcao responsavel por enviar requisições ao servidor
		// expresss utilizando os requisitos do tipo REST.
		// tal funcao eh relevantemente alimentada pelos REST-ends
		var Contato = Contato;
		// funcao responsavel por buscar os dados
		var buscaContatos = function (){
			Contato.query(
				function(contatos){
					$scope.contatos = contatos;
					$scope.mensagem = {};
				}
				,	function(erro){
						$scope.mensagem = { texto:'Não foi possível obter a lista de contatos'};
				}
			);
		}

		buscaContatos();

		$scope.remove = function(contato){
			
			Contato.delete({id: contato._id},
				buscaContatos
			,	function(erro) {
					$scope.mensagem = { texto:'Não foi possível remover o contato'};
					console.log(erro);
				}
			);
		};
	}
); //end controller
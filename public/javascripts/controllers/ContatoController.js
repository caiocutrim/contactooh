angular.module('contatooh').controller('ContatoController',
	function ($scope,$routeParams,Contato) {
		var Contato = Contato;
		if($routeParams.contatoId){
			Contato.get({id:$routeParams.contatoId}
				,	function(contato){
					$scope.contato = contato; //populando os dados
				}
				,	function(erro){
					$scope.mensagem = { texto : 'Não foi possível obter o contato' };
					console.log(erro);
				}
			);
			
		}else{
			$scope.contato = {};
		}
		
		// salvar contato
		$scope.salva = function () {
			$scope.contato = new Contato();
			$scope.contato.$save()
				.then(function(){
					$scope.mensagem	=	{texto:'Salvo com sucesso!'}

					// limpa o formulario
					$scope.contato = new Contato();
				})
				.catch (function(erro){
					$scope.mensagem = { texto:"Desculpe, não foi possível salvar..."}
				})
			}
		;
	}
);
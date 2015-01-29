angular.module('contatooh').controller('ContatoController',
	["$scope", "$routeParams", "Contato", function ($scope, $routeParams, Contato) {
		var Contato = Contato;
		// se receber o id na url, faça
		if($routeParams.contatoId)
		{
			Contato.get({id:$routeParams.contatoId}
				,	function(contato)
				{
					$scope.contato = contato; //populando os dados
				}
				,	function(erro)
				{
					$scope.mensagem = { texto : 'Não foi possível obter o contato' };
					console.log(erro);
				}
			);
		}
		else
		{
			$scope.contato = new Contato();
		}
		
		// salvar contato
		$scope.salva = function () 
		{
			$scope.contato
			.$save()
				.then(function()
				{
					$scope.mensagem	=	{texto:'Salvo com sucesso!'}

					// limpa o formulario
					$scope.contato = new Contato();
				})
				.catch (function(erro)
				{
					$scope.mensagem = { texto:"Desculpe, não foi possível salvar..."}
				});
		};
		Contato.query(function(contatos)
		{
			$scope.contatos = contatos;
		});
	}]
);
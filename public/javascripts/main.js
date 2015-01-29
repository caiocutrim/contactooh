// public/javascripts/main.js
angular.module('contatooh',['ngRoute','ngResource'])

	// configuracao de rotas do angular que usa o ajax 
	// pra carregar as partials
	.config(function ($routeProvider,$httpProvider) {

		$httpProvider.interceptors.push('meuInterceptor');

		// lista de contatos
		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController'
		});

		// lista de dados do contato
		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

		// novo contato
		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

		// github authentication
		$routeProvider.when('/auth', {
			templateUrl: 'partials/auth.html'
		});

		// rota padrão
		$routeProvider.otherwise({ redirectTo: '/contatos' });

	});
 
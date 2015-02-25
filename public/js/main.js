// public/js/main.js
angular.module('contatooh',['ngRoute','ngResource','meusComponentes'])
	.config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {

		$httpProvider.interceptors.push('meuInterceptor');

		// rota padrão

		// lista de contatos
		$routeProvider
			.when('/contatos', {
				templateUrl: 'partials/contatos.html',
				controller: 'ContatosController'
			})
			.when('/contato/:contatoId', {
				templateUrl: 'partials/contato.html',
				controller: 'ContatoController'
			})
			.when('/contato', {
				templateUrl: 'partials/contato.html',
				controller: 'ContatoController'
			})
			.when('/auth', {
				templateUrl: 'partials/auth.html'
			})
			.otherwise({ redirectTo: '/contatos' })
		;

	}]);

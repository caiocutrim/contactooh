// config/database.js
var mongoose = require('mongoose');
module.exports = function  (uri) {
	mongoose.connect(uri);
	// conectado
	mongoose.connection.on('connected',function(){
		console.log('Mongoose conectado em '+ uri);
	});
	// desconectado
	mongoose.connection.on('disconnected', function(){
		console.log('	Mongoose diconectado em '+ uri);
	});
	// erro de conexão
	mongoose.connection.on('error', function(erro){
		console.log('Ocorreu um erro na conecção com o Mongoose, erro: '+erro);
	});
	//  quando a aplicação terminar seus serviços, imprima
	process.on('SIGINT', function() {
		mongoose.connection.close(function(){
			console.log('	Mongoose, desconectado pelo término da aplicação');
			//indica que a finalização ocorreu sem erro
			process.exit(0);
		});
	});

}
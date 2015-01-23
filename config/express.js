// config/express.js
		var express  	 = require('express')
			,	load       =	require('express-load')
			,	bodyParser = require('body-parser')
		;
module.exports = function (){
	var	app = express();
	app
		.set('port', 3000) //define a porta
		.set('view engine', 'ejs') //define engine de templates e
		.set('views','./app/views') // o diretorio de views
		.use(express.static('./public')) //define o diretorio de arquivos acessiveis ao usuário
		.use(bodyParser.urlencoded({extended:true})) //qs :true
		.use(bodyParser.json())//permitindo o uso de json como trafego de dados 
		.use(require('method-override')())//uso do PUT e DELETE http REST - protocol
	;
	

	load('models',{cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app)
	;	
	return app;
};
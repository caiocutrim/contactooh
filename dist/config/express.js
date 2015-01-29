// config/express.js
			var express  	 =  require('express')
			,	load       	 =	require('express-load')
			,	bodyParser   =  require('body-parser')
			,	cookieParser =  require('cookie-parser')
			,	passport     =	require('passport')
			, session      =  require('express-session')
			, helmet       =  require('helmet')
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
		.use(cookieParser()) //usa o middleware de cookies para realizar o parser do header populando req.cookies e armazena o id da sessao
		.use(session( //define a session para teste
		{ secret:'homem avestruz'
		,	resave:true
		,	saveUninitialized:true
		}))
		.use(passport.initialize()) // inicia o middleware passport para o auth2.0
		.use(passport.session()) // cria sessions
		.use(helmet()) //middleware de seguranca da app
		.disable('x-powered-by') //desabilita no header o type application utilizada
		.use(helmet.hidePoweredBy({setTo:'Feito com a tua mae aquela vagabunda XD'}))
		.use(helmet.xframe()) // protege contra ataque de clickjacking pelo iframe
		.use(helmet.xssFilter()) // protege contra cross-site-scripting
		.use(helmet.nosniff()) // protege contra ataque tipo mime types 
	;
	

	load('models',{cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app)
	;	
	app.get('*', function(req, res){
		res.status(404).render('404');
	});
	return app;
};
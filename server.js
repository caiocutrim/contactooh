var http = 	require ('http')
	,	app  =	require('./config/express')()
;
require('./config/database.js')('mongodb://localhost/contatooh');
/**
 * Aqui crio um servidor http para
 * alimentar a aplicação
 */
http
	.createServer(app)
	.listen(app.get('port'), function(){
		console.log('Express server escutando na porta http://caio.dev:'+app.get('port'));
	})
;
	
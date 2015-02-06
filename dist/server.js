var http = 	require ('http')
	,	app  =	require('./app/config/express')(app)
	,	config = require('./app/config/config');
;
require('./app/config/passport')();
require('./app/config/database')('mongodb://localhost/contatooh');
/**
 * Aqui crio um servidor http para
 * alimentar a aplicação
 */
http
	.createServer(app)
	.listen(app.get('port')
  , function(){
		  console.log('Express server escutando na porta http://localhost:'+app.get('port'));
	 })
;

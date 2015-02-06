var http = 	require ('http')
	,	app  =	require('./config/express')(app)
	,	config = require('./app/config/config')();
;
require('./config/passport')();
require('./config/database')(config.db);

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

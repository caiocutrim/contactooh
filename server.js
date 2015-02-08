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
http.createServer(app).listen(config.port, config.address
  , function(){
		  console.log('Express Http server '+'('+config.address+')'+' '+config.env+' na porta'+config.port);
	 })
;

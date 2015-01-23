var http = 	require ('http')
	,	app  =	require('./config/express')()
;
http
	.createServer(app)
	.listen(app.get('port')
		,	function(){
				console.log('Express server escutando na porta http://caio.dev:'+app.get('port'));
			})
;
	
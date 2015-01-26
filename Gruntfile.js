/**
 * configuracao inicial do automatizador de tarefas, o grunt
 * @type {Object}
 */
module.exports = function(grunt){
	var css = "public/stylesheets/css/*"
	,	less  = 
	[	"public/stylesheets/less/*.less"
	,	"public/libs/less/*"
	]
	, app   = 
	[	"app/models/*"
	,	"app/views/*"
	,	"app/controllers/*"
	,	"app/routes/*"
	,	"app/*"
	,	"public/*"
	,	"public/partials/*"
	,	"public/javascripts/controllers/*"
	,	"public/javascripts/services/*"
	]
	;
	grunt.initConfig
	({
		nodemon:
		{
			dev:
			{
				script:"server.js"
			}
		}
	,	less:
		{
			development	: 
			{
				files:
				{
					"public/stylesheets/css/styles.css":"public/stylesheets/less/style.less"
				}
			}		
		}			
	,	watch:
		{
			all:
			{
				files : ['*',css,less,app]
			,	options : { livereload : true }
			}
		,	css : 
			{
				files: [less,css]
			,	tasks: ['less']
			, options : { livereload:true }
			}
		}
	,	concurrent : 
		{
			development : ['nodemon','watch']
		,	options : 
			{
				logConcurrentOutput: true
			}	
		}	
	});


	require('load-grunt-tasks')(grunt);
	
	grunt.registerTask('default',['concurrent:development']);
};
// contatooh/Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig
	(
	{ usemin : { html : 'app/views/**/*.ejs' }
	, useminPrepare :
		{ options :
			{ root : 'public/'
			,	dest : 'public/'
			}
		,	html : "app/views/**/*.ejs"
		}
	, ngAnnotate:
		{	scripts:
			{	expand: true
			, src: ['public/js/**/*.js']
			}
		}
	}
	);

	grunt.registerTask
	( 'minifica'
	, [	'useminPrepare'
		,	'ngAnnotate'
		,	'concat'
		,	'uglify'
		,	'cssmin'
		,	'usemin'
		]
	);
	// loading tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-usemin');

}
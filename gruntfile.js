var css = "public/stylesheets/*.css";
var less = "public/stylesheets/*.less";

module.exports = function(grunt){
	
	grunt.initConfig({
		nodemon:{
			dev:{
				script:"server.js"
			}
		}
		
	});


	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default',['nodemon']);
};
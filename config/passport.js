// config/passport.js
module.exports = function(){
var passport = require('passport')
	,	GitHubStrategy = require('passport-github').Strategy
	,	mongoose = require('mongoose')
	, config = require('../app/config/config')()
;

	var Usuario = mongoose.model('Usuario');


	passport.use(new GitHubStrategy(
	{ clientID: config.clientID
	, clientSecret:config.clientSecret
	,	callbackURL:"http://caio.dev:3000/auth/github/callback"
	}
	, function(accesToken, refreshToken, profile, done)
	{	Usuario.findOrCreate(
			{	"login": profile.username }
		,	{	"nome":profile.username }
		,	function(erro,usuario)
			{	if(erro)
				{	console.log(erro);
					return done(erro);
				}

				return done(null, usuario);
			}
		);
	}
	));

	passport.serializeUser(function(usuario, done )
	{
		done(null,usuario._id);
	});
	passport.deserializeUser(function(id, done)
	{ Usuario.findById(id).exec()
		.then(function(usuario)
		{
			done(null, usuario);
		});
	});
}
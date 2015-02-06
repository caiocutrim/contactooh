// config/passport.js
module.exports = function(){
var passport = require('passport')
	,	GitHubStrategy = require('passport-github').Strategy
	,	mongoose = require('mongoose')
;

	var Usuario = mongoose.model('Usuario');


	passport.use(new GitHubStrategy(
	{ clientID: '5e1cb83bad1f706a6169'
	, clientSecret:'32e61e1040fb6f4e1bb02fdf4004233493fe13e3'
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
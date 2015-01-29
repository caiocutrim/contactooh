// app/models/usuario.js
var mongoose = require('mongoose')
	,	findOrCreate = require('mongoose-findorcreate')
	;
module.exports = function () {
	var schema = mongoose.Schema(
	{	login:
		{	type:String	
		,	required:true
		,	index: { unique: true }
		}
	,	nome:
		{	type: String
		,	required:true	
		}
	, inclusao:
		{	type:Date
		,	default:Date.now	
		}		
	});
	// associando o plugin ao schema
	schema.plugin(findOrCreate);
	return mongoose.model('Usuario',schema);

};
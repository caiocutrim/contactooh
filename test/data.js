var MongoClient = require('mongodb').MongoClient;
var contatos =
[ { nome:"xyz1", email:"xyz1@gmail.com" }
, { nome:"xyz2", email:"xyz2@gmail.com" }
, { nome:"xyz3", email:"xyz3@gmail.com" }
];
MongoClient.connect('mongodb://127.0.0.1:27017/contatooh_test',
  function(err, db)
  {
    if (err) throw err;
    db.dropDataBase(function(err)
    {
      if(err) return console.log(err);
      console.log('banco apagado com sucesso...');
    })
  })
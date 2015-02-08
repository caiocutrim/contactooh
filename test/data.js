var MongoClient = require('mongodb').MongoClient;
var contatos =
[ { nome:"xyz1", email:"xyz1@gmail.com" }
, { nome:"xyz2", email:"xyz2@gmail.com" }
, { nome:"xyz3", email:"xyz3@gmail.com" }
];
MongoClient.connect('mongodb://127.0.0.1:27017/contactooh_test',
  function(err, db)
  {
    if (err) throw err;
    db.dropDatabase(function(err)
    {
      if(err) return console.log(err);
      console.log('banco apagado com sucesso...');
      db.collection('contatos').insert(contatos, function(err, inserted)
      {
        if(err) return console.log(err);
        console.log('Banco populado com sucesso');
        process.exit(0);
      });
    })
  })
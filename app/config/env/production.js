// para usar no openshift
module.exports =
{ env:'production'
, db: process.env.OPENSHIFT_MONGODB_DB_URL + 'contactooh'
, clientID: process.env.CLIENT_ID
, clientSecret:process.env.CLIENT_SECRET
, port:process.env.OPENSHIFT_NODEJS_PORT
, address:process.env.OPENSHIFT_NODEJS_IP
, domain:process.env.OPENSHIFT_APP_DNS
};

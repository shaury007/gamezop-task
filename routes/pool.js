//code to establish postgres database connection with the node application

const pgp = require('pg-promise')(/*options*/);

const dbURL = 'postgres://nlcfrttxmdoymh:ee5208d06c57bc8b11fbe030909a2f7693a19e7b8c308437d0a1f8f72818bcbf@ec2-54-243-193-59.compute-1.amazonaws.com:5432/d2r4sjkhlhq6e8?ssl=true';
const db = pgp(dbURL);

module.exports = db;
const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

const host = 'localhost'
const port = 27017
const db_name = 'wsb_db'

let _db;

//localhost
// const uri = `mongodb://root:root@${host}:${port}/${db_name}?authMechanism=SCRAM-SHA-1&authSource=admin`;
//prod
const uri =  'mongodb://wsb-db:v3XHOf2yBGmrQODSmO948uTwgXHNcU33RYchxYGmqZaHitTtweIgVFHA13GCEOOsNrTEhGb2AgOo5q8ckz6A6g==@wsb-db.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false';

const mongoDBConnect = callback => {
    mongodbClient.connect(
        uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(client => {
            _db = client.db();
            console.log('Połączono!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

const getDb = () => {
    if (_db) {
      return _db;
    }
    throw 'No database found!';
  };

exports.mongoDBConnect = mongoDBConnect;
exports.getDb = getDb;
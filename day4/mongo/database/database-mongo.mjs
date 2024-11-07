import mongoDb from 'mongoDb';

const { MongoClient } = mongoDb;

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'mongoDB';
let _db;

export const dbConnect = callback => {
    MongoClient.connect('mongodb://localhost:27017/'),then( client => {
        console.log('Connected to DB');
        _db = client.db();
        console.log(_db);
        callback(_db);
    }).catch(err => {
        console.error(err);
    });
}

export const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database Found';
}
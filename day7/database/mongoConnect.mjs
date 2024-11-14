import mongoDb from 'mongodb';

const { MongoClient } = mongoDb;

const dbString = 'mongodb+srv://dbuser:Someone123@myshop.vqm2blh.mongodb.net/?retryWrites=true&w=majority&appName=myshop';
const dbName = 'mangaShop';
let _mongoDb;

export const mongoConnect = callback => {
  MongoClient.connect(dbString)
    .then(client => {
      console.log('connected to myShop');
      _mongoDb = client.db(dbName);
      callback();
    })
    .catch(err => {
      console.error(err);
    });
};

export const getDb = () => {
  if (_mongoDb) {
    return _mongoDb;
  }
  throw 'No database found!';
};


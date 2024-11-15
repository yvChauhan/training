import mongoose from 'mongoose';

const dbString = 'mongodb+srv://dbuser:Someone123@myshop.vqm2blh.mongodb.net/?retryWrites=true&w=majority&appName=myshop';
const dbName = 'mangaShop';
let _db;

export const connectToDB = callback => {
    mongoose.connect(dbString)
        .then(() => {
        console.log('connected to myShop');
        _db = mongoose.connection;
        callback();
        })
        .catch(err => {
        console.error(err);
        });
};

export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};


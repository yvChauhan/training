import { ObjectId } from "mongodb";

import { getDb } from "../database/mongoConnect.mjs";

export class BookModel {
    constructor(name, publisher, status, genres, _id) {
        this.name = name;
        this.publisher = publisher;
        this.status = status;
        this.genres = genres;
        this._id = _id ? new ObjectId(_id) : null;
    }

    save() {
        if (this._id) {
            return db
            .collection("products")
            .updateOne({ _id: this._id }, { $set: this })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        } else {
            return db
            .collection("manga")
            .insertOne(this)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        }
        
    }

    static getAll() {
        const db = getDb();
        return db
      .collection("manga")
      .find()
      .toArray()
      .then((books) => books)
      .catch((err) => console.log(err));
    }

    static findById(_id) {
        const db = getDb();
        return db
          .collection("manga")
          .find({ _id })
          .next()
          .then((book) => {
            console.log(book)
            return book;
        })
          .catch((err) => console.log(err));
      }
    
      static delete(_id) {
        const db = getDb();
        return db
          .collection("manga")
          .deleteOne({ id })
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
      }
}
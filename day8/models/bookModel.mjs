import { pool } from "../database/sqlConnect.mjs";

export class BookModel {
    constructor(name, publisher, status, genres, _id) {
        this.name = name;
        this.publisher = publisher;
        this.status = status;
        this.genres = genres;
    }

    save() {
        return pool.execute('INSERT INTO mangaBook (name, publisher, status, genres) VALUES (?, ?, ?, ?)', [this.name, this.publisher, this.status, this.genres]);
    }

    static getAll() {
        return pool.execute('SELECT * FROM mangaBook');
    }

    static findById(id) {
        return pool.execute('SELECT * FROM mangaBook WHERE status = ?', [id]);
    }
    
    static delete(id) {
        
    }
}
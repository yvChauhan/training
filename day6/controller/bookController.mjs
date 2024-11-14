import { MongoClient, ObjectId } from 'mongodb';

import { BookModel } from "../models/bookModels.mjs";

export const BookController = {
    getAllBooks: (req, res) => {
        BookModel.getAll().then((books) => {
            res.status(200).json(books);
        });
    },

    getBookById: (req, res) => {
        const id = req.params.id;
        const bookId = new ObjectId(id);
        BookModel.findById(bookId).then((book) => {
            res.status(200).json(book);
        });
    },

    createNewBook: (req, res) => {
        res.send('Create new book');
    },

    deleteBookById: (req, res) => {
        res.send('Delete book by id');
    },

    updateBookById: (req, res) => {
        res.send('Update book by id');
    },
    
};
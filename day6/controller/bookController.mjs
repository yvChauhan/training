import { ObjectId } from 'mongodb';

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
        const { name, publisher, status, genres } = req.body;
        console.log(name, publisher, status, genres);
        console.log(req.body)
        const newBook = new BookModel(name, publisher, status, genres);
        newBook.save().then((result) => {
            res.status(201).json(result);
        });
    },

    deleteBookById: (req, res) => {
        res.send('Delete book by id');
    },

    updateBookById: (req, res) => {
        res.send('Update book by id');
    },
    
};
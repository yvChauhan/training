import { BookModel } from "../models/bookModel.mjs";

export const BookController = {
    
    getAllBooks: (req, res) => {
        BookModel.find().select('name publisher status').populate('publisher', 'name -_id').then((books) => {
            res.status(200).json(books);
        });
    },

    getBookById: (req, res) => {
        const id = req.params.id;
        BookModel.findById(id).then((book) => {
            res.status(200).json(book);
        });
    },

    createNewBook: (req, res) => {
        const { name, publisher, status, genres } = req.body;
        console.log(name, publisher, status, genres);
        const newBook = new BookModel({name, publisher, status, genres});
        newBook.save().then((result) => {
            res.status(201).json(result);
        });
    },

    deleteBookById: (req, res) => {
        const bookId = req.params.id;
        BookModel.findByIdAndDelete(bookId).then((result) => {
            res.status(200).json(result);
        });
    },

    updateBookById: (req, res) => {
        res.send('Update book by id');
    },
    
};
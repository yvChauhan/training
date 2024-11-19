import { AuthorModel } from '../models/authorModel.mjs';

export const AuthorController = {
    
    getAllAuthor: (req, res) => {
        AuthorModel.find().select('name genres').then((Author) => {
            res.status(200).json(Author);
        });
    },

    getAuthorById: (req, res) => {
        const id = req.params.id;
        AuthorModel.findById(id).then((Author) => {
            res.status(200).json(Author);
        });
    },

    createNewAuthor: (req, res) => {
        const { name, status, genres } = req.body;
        const newAuthor = new AuthorModel({name, status, genres});
        newAuthor.save().then((result) => {
            res.status(201).json(result);
        });
    },

    deleteAuthorById: (req, res) => {
        res.send('Delete Author by id');
    },

    updateAuthorById: (req, res) => {
        res.send('Update Author by id');
    },
    
};
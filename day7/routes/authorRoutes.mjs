import express from 'express';
import { AuthorController } from '../controller/authorController.mjs';


export const authorRouter = express.Router();

authorRouter.get('/', AuthorController.getAllAuthor);

authorRouter.get('/:id', AuthorController.getAuthorById);

authorRouter.post('/', AuthorController.createNewAuthor);

authorRouter.delete('/:id', AuthorController.deleteAuthorById);

authorRouter.patch('/:id', AuthorController.updateAuthorById);

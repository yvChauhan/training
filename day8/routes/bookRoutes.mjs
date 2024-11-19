import express from 'express';
import { BookController } from '../controller/bookController.mjs';

export const bookRouter = express.Router();

bookRouter.get('/', BookController.getAllBooks);

bookRouter.get('/:id', BookController.getBookById);

bookRouter.post('/', BookController.createNewBook);

bookRouter.delete('/:id', BookController.deleteBookById);

bookRouter.patch('/:id', BookController.updateBookById);

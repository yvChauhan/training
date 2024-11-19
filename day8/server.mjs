import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { pool } from './database/sqlConnect.mjs';

import { bookRouter } from './routes/bookRoutes.mjs';
// import { authorRouter } from './routes/authorRoutes.mjs';


const port = 8000;
const host = 'localhost';

const app = express();

const { json, urlencoded } = bodyParser;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));

app.use('/api/v1/books', bookRouter);
// app.use('/api/v1/author', authorRouter);

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})

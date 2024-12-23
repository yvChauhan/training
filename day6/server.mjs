import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { mongoConnect } from './database/mongoConnect.mjs';
import { bookRouter } from './routes/bookRoutes.mjs';

const port = 8000;
const host = 'localhost';

const app = express();

const { json, urlencoded } = bodyParser;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));

app.use('/api/v1/books', bookRouter);


mongoConnect(() => {
    app.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    })
});
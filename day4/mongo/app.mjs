import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { productRouter } from './routes/products-routes.mjs';
import { dbConnect } from './database/database-mongo.mjs';

const port = 8000;
const host = 'localhost';

const app = express();

const { json, urlencoded } = bodyParser;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './templates');

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('First get request');
});

app.use('/products', productRouter);

dbConnect(database => {
  app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
});

// db connection > server
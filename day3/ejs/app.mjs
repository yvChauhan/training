import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

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

app.use('/products', (req, res) => {
  const products = [{name: 'test1', price: 24.00}, {name: 'test2', price: 234.00}, {name: 'test3', price: 30.00}, {name: 'test4', price: 324.00}]
  res.status(200).render('products', {productsItems: products});
})

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
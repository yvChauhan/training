import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const port = 8000;
const host = 'localhost';

const app = express();

const { json, urlencoded } = bodyParser;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));

const data = [{'id': 1, 'name': 'John Doe', 'age': 25, post:[{message: 'thoashlasd kasjd klasj d'}, {message: 'thoashlasd kasjd klasj d'}]}, {'id': 2, 'name': 'Jane Doe', 'age': 25}]

app.get('/', (req, res) => {
    res.send('First get request');
});

app.get('/:id', (req, res) => {
    const instance = data.find((instance) => instance.id === Number(req.params.id));
    res.send(`Hello ${instance.name}`);
});

app.get('/api/v1/users', (req, res) => {
    console.log(req.query);
});

app.post('/api/v1/users', (req, res) => {
    console.log(req.body);
    const id = data.length+1;
    const newUser = {id, ...req.body};
    data.push(newUser);
    res.send(newUser);
});


app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
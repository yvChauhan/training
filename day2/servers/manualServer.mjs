import http from 'http';

const host = 'localhost';
const port = 7000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            if (req.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            console.log(body);
            res.writeHead(201);
            res.end('Ok');
        });
    } else {
        res.writeHead(200);
        res.end('Hello from server\n');
    }
});


server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
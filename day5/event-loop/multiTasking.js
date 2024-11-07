const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doHash(index) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash${index}: `, Date.now() - start);
      });
}

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', chunk => {
            // console.log(chunk.toString());
        });
        res.on('end', () => {
            console.log('Network: ',Date.now() - start);
        });
    }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();



doHash(1);
doHash(2);
doHash(3);
doHash(4);
doHash(4);
doHash(4);
doHash(4);
doHash(4);
doHash(4);
doHash(4);
fs.readFile('multiTasking.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
});

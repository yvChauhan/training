const crypto = require('crypto');

// process.env.UV_THREADPOOL_SIZE = 16;

const start = Date.now();

function doHash(index) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash${index}: `, Date.now() - start);
      });
}

doHash(1);
doHash(2);
doHash(3);
doHash(4);
doHash(5);
doHash(6);
doHash(7);
doHash(8);
doHash(9);
doHash(10);
doHash(11);
doHash(12);
doHash(13);
doHash(14);
doHash(15);
doHash(16);

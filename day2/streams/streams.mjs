import { createReadStream,readFile } from 'fs';

const stream = createReadStream('./bigFile.txt', {highWaterMark: 90000});

stream.on('data', (chunk) => {  
  console.log(chunk);
});


stream.on('close', (chunk) => {  
  //clean code, remove chunks
  console.log(chunk);
});



import { writeFileSync } from 'fs';

for(let i=0; i<10000; i++) {
  writeFileSync('./bigFile.txt', 'Hello world\n', { flag: 'a' });
}
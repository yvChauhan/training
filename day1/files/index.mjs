import { readFile, writeFile } from 'fs/promises';


process.on('unhandledRejection', (error) => {});
process.on('uncaughtException', (error) => {
    // database close
    //background tasks
});

try {
  await readFile('template.html', 'utf8');
} catch (error) {
  console.error('Error reading file:', error);
  process.exit(1);
}

console.log(template);

await writeFile('output.html', template);
import { readFile, writeFile } from 'fs/promises';

console.log(import.meta.url);

let template = await readFile( new URL('template.html', import.meta.url), 'utf8');

const data = {
  title: 'Template Engine',
  body: 'This is a template engine body',
}

console.log(template);

for( const [key, value] of Object.entries(data)){
  template = template.replace(`{{${key}}}`, value);
}

await writeFile( new URL('output.html', import.meta.url), template);

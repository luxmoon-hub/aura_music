import { cp, mkdir, rm } from 'node:fs/promises';

const files = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'icon.svg',
  'sw.js'
];

await rm('www', { recursive: true, force: true });
await mkdir('www', { recursive: true });
for (const file of files) {
  await cp(file, `www/${file}`);
}
console.log('Aura Music web assets copied to www/');

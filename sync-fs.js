// Sync file System
const { readFileSync, writeFileSync } = require('fs');
console.log("start")
const readFile = readFileSync('./content/first.txt', 'utf-8');

//write data
const writeFile = writeFileSync('./content/first.txt', 'new data');

//Append data
const appendFile = writeFileSync('./content/first.txt', 'new data', { flag: 'a' });

console.log(readFile);
console.log(writeFile);
console.log("Done")
console.log("next")
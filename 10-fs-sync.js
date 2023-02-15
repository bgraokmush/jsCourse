const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(`${first} \n${second}`);


/* 
if the file doesn't exist, node creates for self
So the contents are overwritten every time js runs.
if you use option object into flag: 'a', no 
overwritte anymore 
*/
writeFileSync(
    './content/result-sync.txt',
    `\n\nHere is result -> \n${first}, \n${second}`,
    {
        flag: 'a'
    });

// read result txt
const readResult = readFileSync('./content/result-sync.txt', 'utf8')
console.log(readResult)
console.log('done with this task!');
console.log('\nStarting next');
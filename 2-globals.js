/*
__dirname   - path to current directory
__filename  - name of file name
require     - funtion to use modules CommonJS (like S6+ import)
module      - info about current module (file)
process     - info about env where the program is being executed
*/

/* 
 * -----INFORMATİON-----
 * if you use nodejs, there is no window object therefore you can't access
 * window object
*/

console.log(`\n\t file name is-> ${__filename}`)

// infinite loop. execure process per second.
setInterval(() => {
    console.log('hello world!');
}, 1000) // 1 second

console.log(`\n\t file name is-> ${__filename} \n`)


// console.log(process)
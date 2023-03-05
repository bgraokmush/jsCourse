const { readFile } = require('fs')

console.log('start a first task')

// *Check file path!

// note: readfile is asynchronous
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log('starting next task')

/*
    *-- Output is like this --*
    start a first task
    starting next task
    Hello this is first text file
    Completed first task
*/


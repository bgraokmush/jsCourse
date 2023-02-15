const { readFile, writeFile } = require('fs')
console.log('---------START---------');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error(err);
        return
    } else {
        const first = result
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            const second = result

            writeFile(
                './content/result-async.txt',
                `Here is the result: ${first}\n${second} `,
                (err, result) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    console.log('----- done with task -----');

                }
            )
        })
    }
})
console.log('\nStarting next task');
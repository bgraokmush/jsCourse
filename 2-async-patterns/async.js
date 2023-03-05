const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8',
            (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            }
        )
    })
}

const write5 = (item) => {
    for (let i = 0; i < 5; i++) {
        console.log(item);
    }
}


// getText('./content/first.txt')
//     .then(result => write5(result))
//     .catch(err => console.error(err))

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/restult-mint-grenade.txt',
            `THIS IS AWSOME 
            ${first}, 
            ${second}`)

        console.log(first, "\n", second);
    } catch (error) {
        console.log(error);
    }
}

start()
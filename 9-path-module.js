const path = require('path')

// my platofrm specific path
console.log(path.sep)

// access the text.txt path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//access the text.txt file name
const base = path.basename(filePath)
console.log(base);

// access the test.txt all path from root
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

// if you access the current file baseName
const currentName = path.basename(__filename)
console.log(currentName);


// CommonJS, every file is module
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const func = require('./5-utils')


/*
    first of all, we access name array from 4-name.js file
    then using the forEach metod for all name array element, we use sayHi function from 5-utils.js file
*/
names.name.forEach(element => {
    func.sayHi(element)
});
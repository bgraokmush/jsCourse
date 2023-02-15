// CommonJS, every file is module
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const func = require('./5-utils')
const data = require('./6-alternative-flavor')


//for separate log lines
console.log("\n");

//diffrent technic for calling module functions
require('./7-mind-grenade')
/*
    first of all, we access name array from 4-name.js file
    then using the forEach metod for all name array element, 
    we use sayHi function from 5-utils.js file
*/
names.name.forEach(element => {
    func.sayHi(element)
});

//for separate log lines
console.log("\n");

data.items.forEach(item => {
    func.sayHi(item)
})

//for separate log lines
console.log("\n");

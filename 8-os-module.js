const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// metod that returns the system upitme in seconds
const upitme = os.uptime;
console.log(`The system uptime is ${upitme} Start counting...`);


// count uptime per second
const countUpTime = () => {
    setInterval(() => {
        console.log(`this count is -> ${upitme}`);
    }, 1000);
}


// using os object, We create out currentOS object
const currentOS = {
    name: os.type(),
    relase: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(`\n ${currentOS}`);
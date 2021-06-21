const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);

//method returns system uptime in sec
console.log(`System uptime is ${os.uptime()/60} mins`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs);
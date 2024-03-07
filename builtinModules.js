const os = require('os')

// Info about current user
const user = os.userInfo();
console.log(user)

// uptime for system in seconds
console.log(`Uptime ${os.uptime}`)

// current os info

const currentOS = {
    name: os.type(),
    release: os.release(),  
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);


const path = require('path')

console.log(path.sep)
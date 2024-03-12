const Logger = require('./logger');

// this code new Logger is creating a new instance of an object and assigning it to the 
// logger const
const logger = new Logger;

logger.on('logging', (data) => {
    console.log(data)
})

logger.log('Hello world')


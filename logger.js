const EventEmitter = require('events');

// with this little change class Logger contains all the  
class Logger extends EventEmitter{
    log(message) {
        console.log(message);
    
        // we're using 'this' keyword because we're not using emitter we are using Logger thats
        // why we are using this to access the Logger.
        this.emit('logging', { data: 'SuccessFull logIn' })
    }
}

// exporting the Logger class
module.exports = Logger;
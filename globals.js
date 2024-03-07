const age = '12';

console.log(age);


// Globals - No WINDOWS !!!!
// Global mean you can access them anywhere in your file

// __dirname ---- path to current dir
// __filename ---- filename
// require ---- function to use modules (common js)
// module  ---- gives the info about the current module
// process ---  gives the info about the enviroment where the code is being executed

setTimeout(() => {
    console.log('setTimeout - 1Sec')
}, 1000)
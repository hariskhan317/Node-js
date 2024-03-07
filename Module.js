// Module

// import function using require storing them inside the const
const myModules = require('./modules/module');
const names = require('./modules/vars')

// calling that function using const and then function name, 
// we can also destrusct the object names or we can also use names.varName 'names' is the object name 
// and firstNameis the key whose value we want to access
myModules.hello(names.firstName);
myModules.hello(names.lastName);


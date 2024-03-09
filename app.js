const _ = require('lodash');

const list = [1, 2, [3], [[4, 5], 6]];
const updateList = _.flattenDeep(list);

console.log(updateList);
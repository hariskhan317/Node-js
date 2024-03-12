const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFileAync = util.promisify(readFile);
// const writeFileAync = util.promisify(writeFile);

// const getData = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', ((error, result) => {
//             if (error) {
//                 reject(error);
//             }
//             else {
//                 resolve(result)
//             }
//         }))
//     })
// }


//  .then and .catch to call the function and show data and catch any error 
// getData(path).then(result => console.log(result)).catch(err => console.log(err));


//better approch is await

const getDataFunction = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/newFIle.txt',
            `This is new file ${first} and ${second}.`)
        console.log(first,second)
    } catch(err) {
        console.log(err)
    }
}

getDataFunction(); 
import fs from 'node:fs'
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = JSON.parse(dataBuffer)
dataJSON.name = 'Alex'
dataJSON.age = 18
const newDataJson = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json', newDataJson)
console.log(newDataJson)
console.log(dataJSON)

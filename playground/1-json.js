const fs = require('fs')

// const book = {
//     title: 'Five Point Someone',
//     author: 'Chetan Bhagat'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log('Data Buffer:', dataBuffer.toString())

// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log('Parsed Data:', data)
// console.log('Title:', data.title)
// console.log('Author:', data.author)

const citizensOfEarth = fs.readFileSync('1-json.json')
console.log(citizensOfEarth.toString())

const citizensOfEarthJSON = JSON.parse(citizensOfEarth)
console.log(citizensOfEarthJSON)

citizensOfEarthJSON.name = 'Sijo'
citizensOfEarthJSON.age = 39

const updatedCitizensOfEarthJSON = JSON.stringify(citizensOfEarthJSON)
console.log(updatedCitizensOfEarthJSON)

fs.writeFileSync('1-json.json', updatedCitizensOfEarthJSON)
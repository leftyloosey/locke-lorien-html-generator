const fs = require("fs")



var htmlWrite = fs.createWriteStream('./dist/index_test.html', {
    flags: 'a' })

var writeJSON = fs.createWriteStream('./dist/test.json', {
    flags: 'a' })


function generateMarkUp(data) {
    // htmlwrite.write(`${data.maName}\r\n`)
}

// function writeJSON(data) {
    
    // const jdata = JSON.stringify(data, null, 4)
    // engineers.push(jdata)
    
    // JSONwrite.write(`${manager}`)
    // JSONwrite.write(`${engineers}`)
    // JSONwrite.write(`${data.maName}\r\n`)
    // JSONwrite.write(`${data.officeNo}\r\n`)

// }




function getJSON() {
    let jdata = fs.readFileSync('./dist/test.json');
    let employee = JSON.parse(jdata)

    console.log(employee[0].officeNo)
    console.log(employee[1].engName)
    
}


exports.generateMarkUp = generateMarkUp
exports.writeJSON = writeJSON
exports.getJSON = getJSON


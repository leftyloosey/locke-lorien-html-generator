const fs = require("fs")


var htmlWrite = fs.createWriteStream('index_test.html', {
    flags: 'a' })

var JSONwrite = fs.createWriteStream('test.json', {
    flags: 'a' })


function generateMarkUp(data) {
    htmlwrite.write(`${data.maName}\r\n`)
}

function generateJSON(data) {
    JSONwrite.write(`${data.maName}\r\n`)
}

exports.generateMarkUp = generateMarkUp
exports.generateJSON = generateJSON

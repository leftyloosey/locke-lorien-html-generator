const fs = require("fs")
const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch10/src/prompts")
// const Employee = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")
// const Manager = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")
// const Engineer = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")
const classy = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")


var htmlWrite = fs.createWriteStream('./dist/index_test.html', {
    flags: 'a' })

var writeJSON = fs.createWriteStream('./dist/test.json', {
    flags: 'a' })


function generateMarkUp(data) {
    // htmlwrite.write(`${data.maName}\r\n`)
}

function getJSON() {
    let jdata = fs.readFileSync('./dist/test.json');
    let employee = JSON.parse(jdata)

    console.log(employee[0].officeNo)
    console.log(employee[1].engName)
    
}

function addAnother() {
    inquirer.prompt(prompts.addPrompt).then((data) => {
        if (data.addAnother == "Engineer") {
            console.log("fuck")
            classy.engQuest()
        }
        else if (data.addAnother == "Intern") {
            console.log("interns")
            classy.intQuest()
        }
        else finish()
})}

function finish() {
    console.log(classy.employees)
    writeJSON.write(`${JSON.stringify(classy.employees, null, 4)}`)

}



exports.generateMarkUp = generateMarkUp
exports.writeJSON = writeJSON
exports.getJSON = getJSON
exports.addAnother = addAnother
exports.finish = finish


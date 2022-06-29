const fs = require("fs")
const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch10/src/prompts")
const classy = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")

var htmlWrite = fs.createWriteStream('./dist/index_test.html', {
    flags: 'a' })

var writeJSON = fs.createWriteStream('./dist/test.json', {
    flags: 'a' })

function generateMarkUp(a,b,c) {
    const rawh = require("/Users/davidhardin/Desktop/ch/ch10/dist/HTMLbuild")

    htmlWrite.write(a)
    for (i=0;i < b.length;i++) {
        htmlWrite.write(b[i].print)
    }
    htmlWrite.write(c)
}

function addAnother() {
    inquirer.prompt(prompts.addPrompt).then((data) => {
        if (data.addAnother == "Engineer") {
            classy.engQuest()
        }
        else if (data.addAnother == "Intern") {
            classy.intQuest()
        }
        else finish()
})}

function finish() {
    console.log(classy.employees)
    writeJSON.write(`${JSON.stringify(classy.employees, null, 4)}`)

}

function printPage() {
    const rawh = require("/Users/davidhardin/Desktop/ch/ch10/dist/HTMLbuild")
    generateMarkUp(rawh.top,rawh.cardsArr,rawh.bottom)
}

  
exports.generateMarkUp = generateMarkUp
exports.writeJSON = writeJSON
exports.addAnother = addAnother
exports.finish = finish
exports.printPage = printPage
const fs = require("fs")
const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch10/src/prompts")
const classy = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")

var htmlWrite = fs.createWriteStream('./dist/index_test.html', {
    flags: 'a' })

var writeJSON = fs.createWriteStream('./dist/test.json', {
    flags: 'a' })

function generateMarkUp(a,b,c) {

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

    setTimeout(() => {
        printPage()
    }
    , 1000)
    
}

function printPage() {
    inquirer.prompt(prompts.printPage).then((data) => {

    if (data.toprint == "Yes") {
        setTimeout(() => {
        const rawh = require("/Users/davidhardin/Desktop/ch/ch10/dist/HTMLbuild")
        generateMarkUp(rawh.top,rawh.cardsArr,rawh.bottom)
        },
        1000)
        console.log("Printing!")
    }
    else if (data.toprint == "No") {
        console.log("ok")
    }
   


})}

  
exports.generateMarkUp = generateMarkUp
exports.writeJSON = writeJSON
exports.addAnother = addAnother
exports.finish = finish
exports.printPage = printPage
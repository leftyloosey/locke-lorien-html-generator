const fs = require("fs")
const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch10/src/prompts")
const classy = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")

var htmlWrite = fs.createWriteStream('./dist/index_test.html', {
    flags: 'a' })

var writeJSON = fs.createWriteStream('./dist/test.json', {
    flags: 'a' })


// this function writes all html for finished page
function generateMarkUp(a,b,c) {

    htmlWrite.write(a)

    for (i=0;i < b.length;i++) {
        htmlWrite.write(b[i].print)
        if ([i+1] % 3 === 0) {
            htmlWrite.write(b[i+1].colbreak)
        }

    htmlWrite.write(c)
}}

// inquirer choice
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


//finish main function chain before passing off to print
function finish() {
    console.log(classy.employees)
   
    writeJSON.write(`${JSON.stringify(classy.employees, null, 4)}`)

    setTimeout(() => {
        printPage()
    }
    , 1000)
}

//print page yes or no choice
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
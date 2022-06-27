// https://blooming-lowlands-18463.herokuapp.com/

const { write } = require("fs")
const inquirer = require("inquirer")
const { finished } = require("stream")
const funk = require("/Users/davidhardin/Desktop/ch/ch10/src/functions")

var employees = []

var index = 0

const manPrompts = [
    {
    type: 'input',
    name: 'maName',
    message: "Manager name?"
    },
    {
    type: 'input',
    name: 'officeNo',
    message: "Office Number?"
    },
    // {
    // type: 'list',
    // name: 'empType',
    // message: 'Add teammate:',
    // choices: ['Engineer',
    //             'Intern'
    //         ]
    // }
]

const engPrompts = [
    {
    type: 'input',
    name: 'engName',
    message: "Engineer name?",
    },
    {
    type: 'input',
    name: 'engID',
    message: 'ID Number?',
    },
    {
    type: 'input',
    name: 'engGit',
    message: "GitHub username?",
    },
]

const intPrompts = [
    {
    type: 'input',
    name: 'intName',
    message: "Intern name?",
    },
    {
    type: 'input',
    name: 'intID',
    message: 'ID Number?'
    },
    {
    type: 'input',
    name: 'intSchool',
    message: "School?",
    },
]

const addPrompt = [
    {
    type: 'list',
    name: 'addAnother',
    message: 'Add teammate or finish?',
    choices: ['Engineer',
                'Intern',
                "Finish"
            ]
    }
]

inquirer.prompt(manPrompts).then((data) => {
    employees.push(data)
    console.log(employees)
    addAnother()

})

function engQuest() {
    inquirer.prompt(engPrompts).then((data) => {
        
    employees.push(data)
    
    index++
    engPrompts[0].name = "engName"+`${index}`
    engPrompts[1].name = "engID"+`${index}`
    engPrompts[2].name = "engGit"+`${index}`
    
    addAnother()

    // funk.writeJSON.write(`${JSON.stringify(employees, null, 4)}`)
})}

function intQuest() {
    inquirer.prompt(intPrompts).then((data) => {
        employees.push(data)
        index++
        intPrompts[0].name = "intName"+`${index}`
        intPrompts[1].name = "intID"+`${index}`
        intPrompts[2].name = "intSchool"+`${index}`
        addAnother()
 
})}

function finish() {
    console.log(employees)
    funk.writeJSON.write(`${JSON.stringify(employees, null, 4)}`)

}

function addAnother() {
    inquirer.prompt(addPrompt).then((data) => {
        if (data.addAnother == "Engineer") {
            console.log("fuck")
            engQuest()
        }
        else if (data.addAnother == "Intern") {
            console.log("interns")
            intQuest()
        }
        else finish()
    }

)}

// funk.getJSON()


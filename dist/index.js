// https://blooming-lowlands-18463.herokuapp.com/

const inquirer = require("inquirer")
const funk = require("./src/functions")

const manPrompts = [
    {
    type: 'input',
    name: 'maName',
    message: "Manager name?"
    },
    {
    type: 'list',
    name: 'empType',
    message: 'Add teammate:',
    choices: ['Engineer',
                'Intern'
            ]
      }
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
    name: 'engID',
    message: 'ID Number?'
    },
    {
    type: 'input',
    name: 'intSchool',
    message: "School?",
    },
]

inquirer.prompt(manPrompts).then((data) => {
    // (data.empType = 'Engineer' ? engQuest() : intQuest())
    funk.generateJ(data)
    
})

const engQuest = () => {
    inquirer.prompt(engPrompts).then((data) => {
        console.log(data.engName)
        // write.write(`${data.engName}`)
        // write.write(`${JSON.stringify(data)}`)
        
        
        // console.log(`${JSON.parse("test.txt")}`)
        //write.write(`${data.engName, data.engID, data.engGit}`)
        
})}

const intQuest = () => {
    inquirer.prompt(intPrompts).then((data) => {
        console.log(data.intName)
        //write.write(`${data}`)
 
})}



// let rawdata = fs.readFileSync('index_test.json');
// let student = JSON.parse(rawdata);
// console.log(student[0].age)
// console.log(student)


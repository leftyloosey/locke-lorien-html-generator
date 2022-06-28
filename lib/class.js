// const index = require("/Users/davidhardin/Desktop/ch/ch10/index")
const fs = require("fs")
const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch10/src/prompts")
const funk = require("/Users/davidhardin/Desktop/ch/ch10/src/functions")

var employees = []


class Employee {
    constructor(nameOf, idOf, emailOf) {
      this.nameOf = nameOf
      this.idOf = idOf
      this.emailOf = emailOf
    }
    getName() {
        console.log(this.nameOf)
    }
    getID() {
        console.log(this.idOf)
    }
    getEmail() {
        console.log(this.emailOf)
    }
    getRole() {
        console.log("employee")
}}

class Manager extends Employee  {
    constructor(officeNo) {
        super(nameOf, idOf, emailOf);
        this.officeNo = officeNo
    }
    getRole() {
        console.log("manager")
}}

class Engineer extends Employee {
    constructor(engGit) {
        super(nameOf, idOf, emailOf);
        this.engGit = engGit
        
}}

// class Intern extends Employee {

// }

function intQuest() {
    console.log("intern")
}

function engQuest() {
    inquirer.prompt(prompts.engPrompts).then((data) => {

    nameOf = data.engName
    idOf = data.engID
    emailOf = data.engEmail

    const engineer = new Engineer(data.engGit)
    console.log("engineer: ", engineer)

    employees.push(engineer)
    console.log(employees)
    // index++
    // engPrompts[0].name = "engName"+`${index}`
    // engPrompts[1].name = "engID"+`${index}`
    // engPrompts[2].name = "engGit"+`${index}`
    
    funk.addAnother()

    // funk.writeJSON.write(`${JSON.stringify(employees, null, 4)}`)
})}


function manQuest() {
    inquirer.prompt(prompts.manPrompts).then((data) => {

    nameOf = data.maName
    idOf = data.manID
    emailOf = data.manEmail


    const manager = new Manager(data.maNo)
    employees.push(manager)
    console.log("manager: ", manager)
    manager.getName()
    manager.getRole()
    funk.addAnother()
    // engQuest()
})}

exports.Manager = Manager
exports.Engineer = Engineer
exports.Employee = Employee

exports.manQuest = manQuest
// exports.intQuest = intQuest
exports.engQuest = engQuest
exports.employees = employees











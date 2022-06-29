// const index = require("/Users/davidhardin/Desktop/ch/ch10/index")
const fs = require("fs")
const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch10/src/prompts")
const funk = require("/Users/davidhardin/Desktop/ch/ch10/src/functions")
const { builtinModules, Module } = require("module")

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
        console.log("manager!")
}}

class Engineer extends Employee {
    constructor(engGit) {
        super(nameOf, idOf, emailOf);
        this.engGit = engGit
    }
    getRole() {
        console.log("engineer!")
        
}}

class Intern extends Employee {
    constructor(intSchl) {
        super(nameOf, idOf, emailOf);
        this.intSchl = intSchl
    }
    getRole() {
        console.log("intern!")
}}

function intQuest() {
    inquirer.prompt(prompts.engPrompts).then((data) => {

    nameOf = data.intName
    idOf = data.intID
    emailOf = data.intSchl

    const intern = new Intern(data.intSchl)
    employees.push(engineer)

    funk.addAnother()
})}

function engQuest() {
    inquirer.prompt(prompts.engPrompts).then((data) => {

    nameOf = data.engName
    idOf = data.engID
    emailOf = data.engEmail

    const engineer = new Engineer(data.engGit)
    employees.push(engineer)


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

    funk.addAnother()
    
})}

exports.Manager = Manager
exports.Engineer = Engineer
exports.Employee = Employee
exports.Intern = Intern


exports.intQuest = intQuest
exports.engQuest = engQuest
exports.manQuest = manQuest
exports.employees = employees










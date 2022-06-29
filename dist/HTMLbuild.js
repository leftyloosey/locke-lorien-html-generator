const classy = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")
const funk = require("/Users/davidhardin/Desktop/ch/ch10/src/functions")
const fs = require("fs")

let employees
let jdata

var cardsArr = []

class mCard {
    constructor(a) {
      this.print = `        
      <div class="row">
          <div id="col1" class="col px-3">
      
              <div class="card g-2" style="width: 18rem;">
                  <div class="card-header bg-primary text-white">
                      ${a.nameOf} <br>
                      ${a.roleOf}
                  </div>
                  <ul class="list-group list-group-flush shadow border px-3">
                  
                      <li class="list-group-item border bg-light">ID: ${a.idOf}</li>
                      <li class="list-group-item border bg-light">Email: ${a.emailOf}</li>
                      <li class="list-group-item border bg-light">Office#: ${a.officeNo}</li>
                  </ul>
                  `
    }}
class eCard {
    constructor(a) {
        this.print = `        
        <div class="row">
            <div id="col1" class="col px-3">
        
                <div class="card g-2" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        ${a.nameOf} <br>
                        ${a.roleOf}
                    </div>
                    <ul class="list-group list-group-flush shadow border px-3">
                    
                        <li class="list-group-item border bg-light">ID: ${a.idOf}</li>
                        <li class="list-group-item border bg-light">Email: ${a.emailOf}</li>
                        <li class="list-group-item border bg-light">GitHub: ${a.engGit}</li>
                    </ul>
                    `
    }}
class iCard {
    constructor(a) {
        this.print = `        
        <div class="row">
            <div id="col1" class="col px-3">
        
                <div class="card g-2" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        ${a.nameOf} <br>
                        ${a.roleOf}
                    </div>
                    <ul class="list-group list-group-flush shadow border px-3">
                    
                        <li class="list-group-item border bg-light">ID: ${a.idOf}</li>
                        <li class="list-group-item border bg-light">Email: ${a.emailOf}</li>
                        <li class="list-group-item border bg-light">School#: ${a.intSchl}</li>
                    </ul>
                    `
    }}

function getJSON() {
    jdata = fs.readFileSync('./dist/test.json');
    employees = JSON.parse(jdata)
}

getJSON()

function counter() {
    for (let i=0; i<employees.length; i++) {
        if (employees[i].roleOf == "manager") {
            const mcard = new mCard(employees[i])
            cardsArr.push(mcard)
        }
        if (employees[i].roleOf == "engineer") {
            const ecard = new eCard(employees[i])
            cardsArr.push(ecard)
        }
        if (employees[i].roleOf == "intern") {
            const icard = new iCard(employees[i])
            cardsArr.push(icard)
        }
        // console.log(cardsArr)
}}


const top = `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>the team roster</title>
    </head>

    <body style="background-color: white">
        <div class="container-fluid" style="background-color: white">
            <div class="w-100 text-center mt-3 mb-3 bg-opacity-10 text-white" style="background-color: lightcoral">
            <h3>our dear team</h3>
        </div>`

const card1= `        
<div class="row">
    <div id="col1" class="col px-3">

        <div class="card g-2" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                ${employees[0].nameOf} <br>
                ${employees[0].roleOf}
            </div>
            <ul class="list-group list-group-flush shadow border px-3">
            
                <li class="list-group-item border bg-light">ID: ${employees[0].idOf}</li>
                <li class="list-group-item border bg-light">Email: ${employees[0].emailOf}</li>
                <li class="list-group-item border bg-light">Office#: ${employees[0].officeNo}</li>
            </ul>
        </div>`
const card2= ``

const bottom = `        </div>
    
<script src="script.js"></script>

</body>
</html>`

exports.top = top
exports.card1 = card1
exports.bottom = bottom
exports.cardsArr = cardsArr
exports.counter = counter
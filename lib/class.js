class Employee {
    constructor(name, id, email) {
      this.name = name
      this.id = id
      this.email = email
    }
    getName() {
        console.log(this.name)
    }
    getID() {
        console.log(this.id)
    }
    getEmail() {
        console.log(this.email)
    }
    getRole() {
        console.log("employee")
    }
}

class Manager extends Employee {
    constructor(officeNo) {
        super(name, id, email);
        this.officeNo = officeNo
        this.name = name
    
    }
    getRole() {
        console.log("manager")
    }

}
class Engineer extends Employee {

}

class Intern extends Employee {

}

module.exports = Employee
module.exports = Manager
module.exports = Engineer
module.exports = Intern
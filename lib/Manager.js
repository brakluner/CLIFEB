// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(Employee) {
        super(Employee) 
        this.Linkedin = ""
    }
    getLinkedin() {
        return this.Linkedin
    }
}
//getLinkedin();

module.exports = Manager;
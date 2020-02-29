// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(Employee) {
        super(Employee)
        this.school = ""
    }
    getSchool() {
        return this.school
    }
}
//getSchool();

module.exports = Intern;
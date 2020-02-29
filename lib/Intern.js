// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        return this.school
    }
}
//getSchool();

module.exports = Intern;
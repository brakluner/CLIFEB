// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(Github) {
    this.Github = Github;
  }
}
//gitHubUser();

module.exports = Engineer;
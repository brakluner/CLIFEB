const inquirer = require("inquirer");

class Employee {
  constructor(Employee) {
    this.Name = Employee.Name;
    this.ID = Employee.ID;
    this.Email = Employee.Email;
    this.Role = Employee.Role;
  }
  getRole() {
    return this.Role
  }
  getName() {
    return this.Name
  }
  getID() {
    return this.ID
  }
  getEmail() {
    return this.Email
  }
  }
  

module.exports = Employee;
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//var prompts = new Employee();

var employees = []

  var questions = [
  {
    type: "input",
    name: "Name",
    message: "Employee name?"
  },
  {
    type: "input",
    name: "ID",
    message: "Employee ID?"
  },
  {
    type: "input",
    name: "Email",
    message: "Employee Email?"
  },
  {
    type: "list",
    message: "Employee role?",
    name: "Role",
    choices: [
      "Engineer",
      "Intern",
      "Manager"
    ]
  },
  ]
init();
function init() {
inquirer.prompt(questions).then(function(Employee) {

  console.log(Employee.Role)

  if (Employee.Role === "Manager") {
    var M = new Manager(Employee) 
    M.ID = Employee.ID
    M.Email = Employee.Email
    M.Role = Employee.Role
    getOfficeNum(M)
  
  } else if (Employee.Role === "Engineer") {
    var E = new Engineer(Employee)
    E.ID = Employee.ID
    E.Email = Employee.Email
    E.Role = Employee.Role
    gitHubUser(E)
    
  } else if (Employee.Role === "Intern") {
    var I = new Intern(Employee)
    I.ID = Employee.ID
    I.Email = Employee.Email
    I.Role = Employee.Role
    getSchool(I)
    
  }
})
}
function confirm() {
  inquirer.prompt([
    {
      type: "list",
      name: "next",
      message: "Add another employee?",
      choices: [
        "Yes",
        "No"
      ]
    }
  ]).then(function(answer) { 
  if (answer.next === "Yes") {
    init()
  } else {
    fs.writeFile(outputPath,render(employees),function(err) {
        console.log(err)
    })
    }
  })
} 

function getOfficeNum (M) {
inquirer.prompt([
    {
      type: "input",
      name: "officeNum",
      message: "Whats your office number?"
    },
    
  ]).then(function(officeNum) {
    M.officeNum = officeNum
    employees.push(M)
  }).then(confirm)
  
    
  }

function getSchool (I) {
inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Whats your scool?"
    },
    
  ]).then(function(school) {
    I.school = school
    employees.push(I)
  }).then(confirm)
  
  
  }
    
function gitHubUser (E) {
inquirer.prompt([
    {
      type: "input",
      name: "Github",
      message: "What is your Github?"
    },
]).then(function(Github) {
  E.Github = Github
  employees.push(E)
  console.log(employees)
}).then(confirm)


} 




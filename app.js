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
    getLinkedin(M)
  
  } else if (Employee.Role === "Engineer") {
    Employee.ID = Engineer.ID
    Employee.Email = Engineer.Email
    Employee.Role = Engineer.Role
    gitHubUser(Engineer)
    
  } else if (Employee.Role === "intern") {
    Employee.ID = Intern.ID
    Employee.Email = Intern.Email
    Employee.Role = Intern.Role
    getSchool(Intern)
    
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
    console.log(answer)
  if (answer.next === "Yes") {
    init()
  } else {
    fs.writeFile(outputPath,render(employees),function(err) {
        console.log(err)
    })
    }
  })
} 

function getLinkedin (M) {
inquirer.prompt([
    {
      type: "input",
      name: "Linkedin",
      message: "Whats your Linkedin?"
    },
    
  ]).then(function(Linkedin) {
    M.Linkedin = Linkedin
    employees.push(M)
  }).then(confirm)
  
    
  }

function getSchool () {
inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Whats your scool?"
    },
    
  ]).then(confirm);
  
  
  }
    
function gitHubUser () {
inquirer.prompt([
    {
      type: "input",
      name: "Github",
      message: "What is your Github?"
    },
]).then(confirm);


} 




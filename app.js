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

inquirer.prompt([
  {
    type: "input",
    name: "ID",
    message: "Employee name?"
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
]).then(function(Employee) {

  console.log(Employee.Role)

  if (Employee.Role === "Manager") {
    getLinkedin()
  } else if (Employee.Role === "Engineer") {
    gitHubUser()
  } else if (Employee.Role === "intern") {
    getSchool()
  }
    
function getLinkedin () {
inquirer.prompt([
    {
      type: "input",
      name: "Linkedin",
      message: "Whats your Linkedin?"
    },
    
  ]).then(function(Manager) {
  
    console.log(Manager)
  })
    };

function getSchool () {
inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Whats your scool?"
    },
    
  ]).then(function(Intern) {
  
    console.log(Intern)
  })
    };
function gitHubUser () {
inquirer.prompt([
    {
      type: "input",
      name: "Github",
      message: "What is your Github?"
    },
]).then(function(Engineer) {
  console.log(Engineer)

})
}
  })



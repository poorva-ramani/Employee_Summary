const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const card = [];

function promptUser() {
  inquirer
    .prompt([
      {
        message: "Enter your name",
        name: "name",
        type: "input"
      },
      {
        message: "Enter your id",
        name: "id",
        type: "number"
      },
      {
        message: "Enter your email",
        name: "email",
        type: "input"
      },
      {
        message: "Enter your Role",
        name: "role",
        type: "list",
        choices: [
          'Manager',
          'Engineer',
          'Intern',
        ]
      }
    ])
    .then(function ({ name, id, email, role }) {
      if (role === 'Manager') {
        inquirer
          .prompt([
            {
              message: "Enter your office number",
              name: "officenumber",
              type: "number"
            }
          ]).then(function ({ officenumber }) {
            const manager = new Manager(name, id, email, officenumber);
            console.log(manager);
          });
      }
      else if (role === 'Engineer') {
        inquirer
          .prompt([
            {
              message: "Enter your github account name",
              name: "github",
              type: "input"
            }
          ]).then(function ({ github }) {
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
          });
      }
      else if (role === 'Intern') {
        inquirer
          .prompt([
            {
              message: "Enter name of your School",
              name: "school",
              type: "input"
            }
          ]).then(function ({ school }) {
            const intern = new Intern(name, id, email, school);
            console.log(intern);
          });
      }
    });
}

function addEmp() {
  return inquirer.prompt([
    {
      message: "Would you like to add an employee to the team?",
      name: "add",
      type: "list",
      choices: [
        'yes',
        'no',
      ]
    }
  ])
}

function iterate(answer) {
  if (answer.add === 'yes') {
    initiate()
  }
  else {
    console.log("\nGoodbye!");
    process.exit(0);
  }
};

async function initiate() {
  try {
    await promptUser();
    const answer = await addEmp();
    iterate(answer);
  } catch (err) {
    console.log(err);
  }
};

initiate();


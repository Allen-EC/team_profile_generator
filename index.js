// TODO: Write Code to gather information about the development team members, and render the HTML file.

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//const inquirer = require("./node_modules/inquire");
const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOfficeNumber",
    },
    {
        type: "loop",
        name: "employeeType",
        message: "Do you wish to add another employee?",
        questions:
        [
            {
                type: "list",
                message: "Which type of employee would you like to add?",
                name: "type",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "employeeName",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the engineer's ID number?",
                name: "employeeId",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the engineer's email address?",
                name: "employeeEmail",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "engineerGitHub",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the intern's name?",
                name: "employeeName",
                when: (employeeType) => employeeType.type === "Intern"
            },
            {
                type: "input",
                message: "What is the intern's ID number?",
                name: "employeeId",
                when: (employeeType) => employeeType.type === "Intern"
            },
            {
                type: "input",
                message: "What is the intern's email address?",
                name: "employeeEmail",
                when: (employeeType) => employeeType.type === "Intern"
            },
            {
                type: "input",
                message: "What is the name of the intern's school?",
                name: "InternSchool",
                when: (employeeType) => employeeType.type === "Intern"
            },
        ]
    }
])
.then((data) => {
    const allEmployees = [];
    const manager = new Manager(data.employeeName, data.employeeId, data.employeeEmail, data.managerOfficeNumber);
    allEmployees.push(manager);
    const employees = data.employeeType;
    for(let loop = 0; loop < employees.length; loop++)
    {
        const newEmployee = employees[loop];
        if (newEmployee.type === "Engineer")
        {
            const engineer = new Engineer(newEmployee.employeeName, newEmployee.employeeId, newEmployee.employeeEmail, newEmployee.engineerGitHub);
            allEmployees.push(engineer);

        }
        else if (newEmployee.type === "Intern")
        {
            const intern = new Intern(newEmployee.employeeName, newEmployee.employeeId, newEmployee.employeeEmail, newEmployee.InternSchool);
            allEmployees.push(intern);

        }
    }
    const text = render(allEmployees);
    fs.writeFile(outputPath, text, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
})






// First, get manager information:
//   Name.
//   Employee ID.
//   email address.
//   Office number.

// Now display menu to enter Engineer, Intern, or finish.

// If engineer get their information:
//   Name.
//   Employee ID.
//   email address.
//   GitHub username.

// If intern, get their information:
//   Name.
//   Employee ID.
//   email address.
//   School.

// If finish, generate team.html and exit.

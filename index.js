// TODO: Write Code to gather information about the development team members, and render the HTML file.

// We need to import the modules we created that contain classes for the 3 types of employee.

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// We are using inquirer to ask the questions, and we are also using it in a loop.

const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

// We will be using the filesystem.

const path = require("path");
const fs = require("fs");

// Lets create the path for the resulting HTML file.

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Once we have collected the information, this is the function that will then create the Employee cards.

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    {
        // First we get the information for the Manager.

        type: "input",
        message: "What is the Manager's name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is the Manager's ID number?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is the Manager's email address?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "managerOfficeNumber",
    },
    {
        // Now that we have a Manager, do we need more team members?

        type: "loop",
        name: "employeeType",
        message: "Do you wish to add another employee?",
        questions:
        [
            {
                // We now need to decide if we are entering the information for an Engineer or an Intern.

                type: "list",
                message: "Would you like to add an Engineer or an Intern?",
                name: "type",
                choices: ["Engineer", "Intern"]
            },
            {
                // Use these questions for an Engineer.

                type: "input",
                message: "What is the Engineer's name?",
                name: "employeeName",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the Engineer's ID number?",
                name: "employeeId",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the Engineer's email address?",
                name: "employeeEmail",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                type: "input",
                message: "What is the Engineer's GitHub username?",
                name: "engineerGitHub",
                when: (employeeType) => employeeType.type === "Engineer"
            },
            {
                // And use these questions for an Intern.

                type: "input",
                message: "What is the Intern's name?",
                name: "employeeName",
                when: (employeeType) => employeeType.type === "Intern"
            },
            {
                type: "input",
                message: "What is the Intern's ID number?",
                name: "employeeId",
                when: (employeeType) => employeeType.type === "Intern"
            },
            {
                type: "input",
                message: "What is the Intern's email address?",
                name: "employeeEmail",
                when: (employeeType) => employeeType.type === "Intern"
            },
            {
                type: "input",
                message: "What is the name of the Intern's school?",
                name: "InternSchool",
                when: (employeeType) => employeeType.type === "Intern"
            },
        ]
    }
])
.then((answers) => {
    const managers = [];
    const engineers = [];
    const interns = [];

    // Create a new object of the Manager class, and add the information entered to the object. Then store this as an array.

    const manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.managerOfficeNumber);
    managers.push(manager);

    // Extract the employee (non manager) information from answers to the questions

    const employees = answers.employeeType;

    // While there are new employees to process, extract the information for the employee, and either add a new engineer or new intern to the correct array.

    for(let loop = 0; loop < employees.length; loop++)
    {
        const newEmployee = employees[loop];
        if (newEmployee.type === "Engineer")
        {
            const engineer = new Engineer(newEmployee.employeeName, newEmployee.employeeId, newEmployee.employeeEmail, newEmployee.engineerGitHub);
            engineers.push(engineer);

        }
        else if (newEmployee.type === "Intern")
        {
            const intern = new Intern(newEmployee.employeeName, newEmployee.employeeId, newEmployee.employeeEmail, newEmployee.InternSchool);
            interns.push(intern);

        }
    }

    // This is where we combine the three arrays, and then generate the HTML

    const text = render([].concat(managers, engineers, interns));

    // If the output directory does not exist, make it exist.

    fs.mkdir(OUTPUT_DIR, { recursive: true }, (err) =>
    {
        if (err) throw err;
    });

    // And finally, we write the html to a file.

    fs.writeFile(outputPath, text, (err) =>
    {
        if (err) throw err;
        //err ? console.error(err) : console.log('Success!');
    });
})
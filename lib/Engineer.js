// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// The Engineer class extends the employee class to add the GitHub Username property defined as github.
// And add a method that will return the GitHub Username. getGithub()
// THe getRole function os changed so that it will return the value of "Engineer" instead of "Employee".

const Employee = require("./Employee");

class Engineer extends Employee
{
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }

    getGithub()
    {
        return this.github;
    }

    getRole()
    {
        return "Engineer";
    }
}

module.exports = Engineer;

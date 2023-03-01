// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// The Intern class extends the employee class to add the Intern's School property defined as school.
// And add a method that will return the intern's school. getSchool()
// THe getRole function os changed so that it will return the value of "Intern" instead of "Employee".

const Employee = require("./Employee");

class Intern extends Employee
{    
    constructor(name, id, email,school)
    {
        super(name, id, email);
        this.school = school;
    }

    getSchool()
    {
        return this.school;
    }

    getRole()
    {
        return "Intern";
    }
}

module.exports = Intern;
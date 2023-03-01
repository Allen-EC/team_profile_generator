// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// The Manager class extends the employee class to add the Office Number property defined as officeNumber.
// And add a method that will return the Office Number. getOfficeNumber().
// THe getRole function os changed so that it will return the value of "Manager" instead of "Employee".

const Employee = require("./Employee");

class Manager extends Employee
{
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber()
    {
        return this.officeNumber;
    }

    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;
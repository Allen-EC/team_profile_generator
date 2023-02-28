// TODO: Write code to define and export the Employee class

// The Employee class has the following properties:
//  Employee Name defined as name
//  Employee ID defined as id
//  Employee email address defined as email
// These properties are defined with the values sent when creating new instances of the class.
// The class also has the following methods:
//  getName() Returns the value stored in the property name
//  getID() Returns the value stored in the property id
//  getEmail() Returns the value stored in the property email
//  getRole() Simply returns the value "Employee"

class Employee
{
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName()
    {
        return this.name;
    }

    getId()
    {
        return this.id;
    }

    getEmail()
    {
        return this.email
    }

    getRole()
    {
        return "Employee";
    }
}

module.exports = Employee;
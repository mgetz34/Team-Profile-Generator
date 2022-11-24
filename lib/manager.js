const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = () => this.officeNumber;

    getRole = () => 'Manager';
}

module.exports = Manager;

// const steve = new Manager('steve', 15, "steve@aol.com", "970-242-8539");

// getEmail(steve);
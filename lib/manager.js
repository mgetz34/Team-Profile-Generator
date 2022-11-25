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

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber, gitHub, school) {
        super(name, id, email, officeNumber, gitHub);
        this.school = school;
    }

    getSchool = () => this.getSchool;

    getRole = () => 'Intern';
}

module.exports = Intern;
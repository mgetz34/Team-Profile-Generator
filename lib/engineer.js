const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber, gitHub) {
        super(name, id, email, officeNumber);
        this.gitHub = gitHub;
    }

    getGithub = () => this.gitHub;

    getRole = () => 'Engineer';
}

module.exports = Engineer;
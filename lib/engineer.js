const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGithub = () => this.gitHub;

    getRole = () => 'Engineer';
}

module.exports = Engineer;
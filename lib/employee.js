class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName = () => this.name;

    getId = () => this.getId;

    getEmail = () => this.email;

    getRole = () => 'Employee';

}

module.exports = Employee;


// const bob = new Employee('bob', 14, "bob@hnk.com");

// getEmail(bob);
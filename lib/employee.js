class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName() {
        console.log(`${this.name}`);
    }

    getId() {
        console.log(`${this.id}`);
    }

    getEmail() {
        console.log(`${this.email}`);

    }
    getRole() {
        return Employee;
    }
}

module.exports = Employee;


const bob = new Employee('bob', 14, "bob@hnk.com");

getRole(bob);
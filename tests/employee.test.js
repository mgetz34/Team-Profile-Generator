const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an employee object by providing name, id, and email', () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.name).toBe("bob");
            expect(employee.id).toBe(14);
            expect(employee.email).toBe("bob@hnk.com");
        });

        it('should be able to set new employee name', () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.name).toBe("bob");
        });
        it("should be able to set new employee id", () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.id).toBe(14);
        });
        it("should be able to set new employee email", () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.email).toBe("bob@hnk.com");
        });
        it("should be able to get name via getName()", () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.getName()).toBe("bob");
        });
        it("should be able to get id via getId()", () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.getId()).toBe(14);
        });
        it("should be able to get email via getEmail()", () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.getEmail()).toBe("bob@hnk.com");
        });
        it("getRole() should return Employee", () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.getRole()).toBe('Employee');
        });
    });
});
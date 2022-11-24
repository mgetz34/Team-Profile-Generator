const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an employee object by providing name, id, and email', () => {
            const employee = new Employee("bob", 14, "bob@hnk.com");
            expect(employee.name).toBe("bob");
            expect(employee.id).toBe(14);
            expect(employee.email).toBe("bob@hnk.com");
        });

        it('should throw an error if provided no arguments', () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        });
        it("should throw an error if not provided an id", () => {
            const cb = new Employee("bob");
            const err = new Error("Expected paramater 'id' to be a non-negative number");
            expect(cb).toThrowError(err);
        });
    });
});
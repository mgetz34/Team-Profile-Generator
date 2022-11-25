const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an manager object by providing name, id, email, and officeNumber', () => {
            const manager = new Manager('sarah', 16, 'sarah@gmail.com', '970-123-4567');
            expect(manager.name).toBe('sarah');
            expect(manager.id).toBe(16);
            expect(manager.email).toBe('sarah@gmail.com');
            expect(manager.officeNumber).toBe('970-123-4567');
        });
        it("should be able to get officeNumber via getOfficeNumber()", () => {
            const manager = new Manager('sarah', 16, 'sarah@gmail.com', '970-123-4567');
            expect(manager.getOfficeNumber()).toBe('970-123-4567');
        });
        it("getRole() should return manager", () => {
            const manager = new Manager('sarah', 16, 'sarah@gmail.com', '970-123-4567');
            expect(manager.getRole()).toBe('Manager');
        });

    });
});
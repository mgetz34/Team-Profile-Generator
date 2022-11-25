const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an Intern object by providing name, id, email, and school', () => {
            const intern = new Intern('jessie', 17, 'jessie@mozilla.com', 'U of D');
            expect(intern.name).toBe('jessie');
            expect(intern.id).toBe(17);
            expect(intern.email).toBe('jessie@mozilla.com');
            expect(intern.school).toBe('U of D');
        });
        it("should be able to get school via getSchool()", () => {
            const intern = new Intern('jessie', 17, 'jessie@mozilla.com', 'U of D');
            expect(intern.getSchool()).toBe('U of D');
        });
        it("getRole() should return Intern", () => {
            const intern = new Intern('jessie', 17, 'jessie@mozilla.com', 'U of D');
            expect(intern.getRole()).toBe('Intern');
        });

    });
});
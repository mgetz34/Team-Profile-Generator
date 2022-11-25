const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an engineer object by providing name, id, email, and gitHub', () => {
            const engineer = new Engineer("steve", 15, "steve@aol.com", 'WIC@github.com');
            expect(engineer.name).toBe("steve");
            expect(engineer.id).toBe(15);
            expect(engineer.email).toBe("steve@aol.com");
            expect(engineer.gitHub).toBe("WIC@github.com");
        });
        it("should be able to get gitHub via getGitHub()", () => {
            const engineer = new Engineer("steve", 15, "steve@aol.com", 'WIC@github.com');
            expect(engineer.getGithub()).toBe('WIC@github.com');
        });
        it("getRole() should return Engineer", () => {
            const engineer = new Engineer("steve", 15, "steve@aol.com", 'WIC@github.com');
            expect(engineer.getRole()).toBe('Engineer');
        });

    });
});
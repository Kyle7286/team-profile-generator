const Intern = require("../lib/Intern");


describe("Intern", () => {
    describe("new Intern", () => {
        it("should be an object", () => {
            const employee = new Intern();
            expect(typeof (employee)).toBe("object");
        });
    });
    describe("getRole()", () => {
        it("should return a string", () => {
            const result = new Intern("brandon", "1", 'brandon@email.com', "msu").getRole();
            const expected = "intern";

            expect(result).toEqual(expected);
        });
        it("should return Intern", () => {
            const result = new Intern("brandon", "1", 'brandon@email.com', "msu").getRole();
            expect(typeof (result)).toBe("string");
        });
        describe("getSchool()", () => {
            it("should return a string", () => {
                const result = new Intern("brandon", "1", 'brandon@email.com', "msu").getSchool();
                expect(typeof (result)).toBe("string");
            });
        });
    });
});


const Manager = require("../lib/Manager");


describe("Manager", () => {
    describe("new Manager", () => {
        it("should be an object", () => {
            const employee = new Manager();
            expect(typeof (employee)).toBe("object");
        });
    });
    describe("getRole()", () => {
        it("should return a string", () => {
            const result = new Manager("brandon", "1", 'brandon@email.com').getRole();
            const expected = "manager";

            expect(result).toEqual(expected);
        });
        it("should return manager", () => {
            const result = new Manager("brandon", "1", 'brandon@email.com').getRole();
            expect(typeof (result)).toBe("string");
        });
    });
});





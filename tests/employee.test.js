const Employee = require("../lib/Employee");

describe("Employee Constructor", () => {
    it("should not be undefined if an employee object is successfully created", () => {
        const brandon = new Employee("Brandon", "Brandon@email.com");
        expect(typeof brandon != "undefined").toEqual(true);
    });
});




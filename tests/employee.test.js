const Employee = require("../lib/Employee");
describe("Employee", () => {
    describe("new Employee", () => {
        it("should be an object", () => {
            const employee = new Employee();
            expect(typeof (employee)).toBe("object");
        });
    });
    describe("getName()", () => {
        it("should return a string with the first letter capitalized", () => {
            const result = new Employee("brandon", "1", 'brandon@email.com').getName();
            const expected = "Brandon";

            expect(result).toEqual(expected);
            expect(typeof (result)).toBe("string");
        });
        it("should return a string with the first letter capitalized", () => {
            const result = new Employee("brandon", "1", 'brandon@email.com').getName();
            expect(typeof (result)).toBe("string");
        });
        it("should return -1 if this.getName() is not a string", () => {
            const result2 = new Employee(1, "1", 'brandon@email.com').getName();
            expect(result2).toEqual(-1);
        });
    });
    describe("getID()", () => {
        it("should return a number", () => {
            const result = new Employee("brandon", "1", 'brandon@email.com').getId();
            const expected = "number";
            expect(typeof (result)).toEqual("number");

        });
        it("should return 1", () => {
            const result = new Employee("brandon", "1", 'brandon@email.com').getId();
            const expected = 1;
            expect(result).toEqual(1);
        });
    });
    describe("getEmail()", () => {
        it("should return a string", () => {
            const result = typeof (new Employee("brandon", "1", 'brandon@email.com').getEmail());
            const expected = "string";
            expect(result).toEqual(expected);
        });
    });
    describe("getRole()", () => {
        it("should return a Employee with the first letter capitalized", () => {
            const result = new Employee("brandon", "1", 'brandon@email.com').getRole();
            const expected = "Employee";

            expect(result).toEqual(expected);
            expect(typeof (result)).toBe("string");
        });
    });
});




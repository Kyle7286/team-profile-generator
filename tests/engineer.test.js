const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    describe("new Engineer", () => {
        it("should be an object", () => {
            const employee = new Engineer();
            expect(typeof (employee)).toBe("object");
        });
    });
    describe("getRole()", () => {
        it("should return a string", () => {
            const result = new Engineer("brandon", "1", 'brandon@email.com', "kyle286").getRole();
            const expected = "engineer";

            expect(result).toEqual(expected);
        });
        it("should return Engineer", () => {
            const result = new Engineer("brandon", "1", 'brandon@email.com', "kyle286").getRole();
            expect(typeof (result)).toBe("string");
        });
        describe("getGithub()", () => {
            it("should return a string", () => {
                const result = new Engineer("brandon", "1", 'brandon@email.com', "kyle286").getGithub();
                expect(typeof (result)).toBe("string");
            });
        });
    });
});


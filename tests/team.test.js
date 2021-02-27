const Manager = require("../lib/Manager");
const Team = require("../lib/team");


describe("team", () => {
    describe("new team", () => {
        it("should be an object", () => {
            const team = new Team("Right Networks");
            expect(typeof (team)).toBe("object");
        });
    });
    describe("addEmployee(employee)", () => {
        it("should return an array of length 1", () => {
            const team = new Team("Right Networks")
            const manager = new Manager("Brandon", "1", "b@haley.net")
            team.addEmployee(manager);
            
            expect(team.manager.length).toEqual(1);
        });
    });
});


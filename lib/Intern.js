const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.title = "Intern"
        this.github = github;
    }

    // Log the employee info
    printInfo() {
        console.log(this);
    }
}
module.exports = Intern;


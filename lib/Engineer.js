const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.title = "Engineer"
        this.github = github;
    }

    // Log the employee info
    printInfo() {
        console.log(this);
    }
}
module.exports = Engineer;



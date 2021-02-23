const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }

    // Log the employee info
    printInfo() {
        console.log(this);
    }
}
module.exports = Manager;



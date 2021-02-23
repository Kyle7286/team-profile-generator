class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.title = "";
        this.id = id;
        this.email = email;
    }

    // Log the employee info
    printInfo() {
        console.log(this);
    }
}
module.exports = Employee;



class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = "employee";
        this.id = id;
        this.email = email;
    }

    // Print out Employee information
    printInfo() {
        console.log(this);
    }

    // Return Employee Name
    getName() {
        return this.name;
    }

    // Return Empoyee ID
    getId() {
        return this.id;
    }

    // Return email
    getEmail() {
        return this.email;
    }

    // Return role
    getRole() {
        return this.role;
    }
}
module.exports = Employee;



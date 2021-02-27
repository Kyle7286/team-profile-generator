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
        if (typeof (this.name) === "string") {
            return this.name.charAt(0).toUpperCase() + this.name.slice(1);
        } else { return -1 }
    }

    // Return Empoyee ID
    getId() {
        return parseInt(this.id);
    }

    // Return email
    getEmail() {
        return this.email;
    }

    // Return role
    getRole() {
        return this.role.charAt(0).toUpperCase() + this.role.slice(1);
    }
}
module.exports = Employee;



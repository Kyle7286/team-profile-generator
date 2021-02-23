class Team {
    constructor() {
        this.employees = [];
    }

    // Add Employee to team
    addEmployee(employee) {
        this.employees.push(employee)
    }

    // Print Current Team
    printTeam() {
        this.employees.forEach(employee => console.log(employee.name))
    }


}
module.exports = Team;



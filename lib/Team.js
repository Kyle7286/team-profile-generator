class Team {
    constructor(teamName) {
        this.teamName = teamName
        this.employees = [];
    }

    // Add Employee to team
    addEmployee(employee) {
        this.employees.push(employee)
    }

    // Print Team
    printTeam() {
        this.employees.forEach(employee => console.log(`Name: ${employee.name} Title: ${employee.role}`))
    }


}
module.exports = Team;



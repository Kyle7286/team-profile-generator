class Team {
    constructor(teamName) {
        this.teamName = teamName
        this.manager = [];
        this.engineer = [];
        this.intern = [];
        this.teamTotal = 0;
    }
    // Add Employee to team
    addEmployee(employee) {
        this[employee.role].push(employee);
        this.teamTotal = this.manager.length + this.intern.length + this.engineer.length;
    }
    // Print Team
    printTeam() {
        this.manager.forEach(employee => console.log(`Name: ${employee.name} Title: ${employee.role}`))
        this.engineer.forEach(employee => console.log(`Name: ${employee.name} Title: ${employee.role}`))
        this.intern.forEach(employee => console.log(`Name: ${employee.name} Title: ${employee.role}`))
    }
}
module.exports = Team;



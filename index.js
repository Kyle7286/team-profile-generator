const Team = require("./lib/Team");
const Employee = require("./lib/Employee");

const team = new Team();
const brandon = new Employee("Brandon", "1", "brandon@domain.com");
team.addEmployee(brandon);
const kyle = new Employee("Kyle", "2", "Kyle@domain.com");
team.addEmployee(kyle);



team.printTeam();
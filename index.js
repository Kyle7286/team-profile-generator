const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = new Team();
const brandon = new Manager("Brandon", "1", "brandon@domain.com", "577");
const kyle = new Engineer("Kyle", "2", "Kyle@domain.com", "www.kharris.github.com");
const katie = new Engineer("Katie", "3", "Katie@domain.com", "www.ko.github.com");
const paul = new Intern("Paul", "4", "Paul@domain.com", "ga tech");
const david = new Intern("David", "5", "David@domain.com", "ga state");

team.addEmployee(brandon);
team.addEmployee(kyle);
team.addEmployee(katie);
team.addEmployee(paul);
team.addEmployee(david);

team.printTeam();
console.log(team);
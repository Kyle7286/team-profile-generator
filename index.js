// libraries
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const chalk = require('chalk');
// convert writeFile (from FS) to async
const writeFileAsync = util.promisify(fs.writeFile);
// Classes
const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// prompt, Main Menu
const promptMainMenu = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            choices: ["Engineer", "Intern", "Finish"],
            message: 'Please select which role you\'d like to add:',
            name: 'selection',
        },
    ]);
}

// prompt, Selections
const promptUserSelections = () => {
    return inquirer.prompt([
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Finish"],
            message: 'Please select which role you\'d like to add:',
            name: 'selection',
        },
    ]);
}
// prompt, Manager
const promptUserManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'office',
        },
    ]);
}
// prompt, Engineer
const promptUserEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Github:',
            name: 'github',
        },
    ]);
}
// prompt, Intern
const promptUserIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'School:',
            name: 'school',
        },
    ]);
}

const init = () => {
    console.log(chalk.bold.blue('Team Profile Generator'));
    console.log(`
    Hello! 
    
    `+ chalk.underline('Thank you') + ` SO much for using ` + chalk.bold.blue('Team Profile Generator') + `! Hope you find it to be very useful.
    Please begin by entering the Manager's information...
        `);
    promptManager();
}

function promptSelections() {
    console.log("");
    promptUserSelections()
        .then(response => {
            console.log("");
            if (response.selection === "Engineer") { promptEngineer(); }
            if (response.selection === "Intern") { promptIntern(); }
            if (response.selection === "Finish") { promptFinish(); }
            
        });
}
function promptManager() {
    console.log(chalk.bold.greenBright("Manager"));
    promptUserManager()
        .then(response => {
            let manager = new Manager(response.name, response.id, response.email, response.office);
            addToTeam(manager);
            promptSelections();
        });
}
function promptEngineer() {
    console.log(chalk.bold.greenBright("Engineer"));
    promptUserEngineer()
        .then(response => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github);
            addToTeam(engineer);
            promptSelections();
        });
}
function promptIntern() {
    console.log(chalk.bold.greenBright("Intern"));
    promptUserIntern()
        .then(response => {
            let intern = new Intern(response.name, response.id, response.email, response.school);
            addToTeam(intern);
            promptSelections();
        });
}
function promptFinish() {
    console.log(`All Done! Generating HTML...`);
    console.log(team);
}
function addToTeam(employee) {
    team.addEmployee(employee);
}

// Run script on call
const team = new Team("Right Networks");
init();


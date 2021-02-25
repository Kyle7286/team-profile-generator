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
// Global Declarations
let team; //be what a team be let


// prompt, Main Menu
const promptUserTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter your team name: ',
            name: 'team',
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
// Main Menu logic
function promptTeam() {
    console.log(chalk.bold.greenBright("Team Name"));
    promptUserTeam()
        .then(response => {
            team = new Team(response.team);
            promptManager()
        });
}
// Selections Logic
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
// Manager logic
function promptManager() {
    console.log(chalk.bold.greenBright("Manager"));
    promptUserManager()
        .then(response => {
            let manager = new Manager(response.name, response.id, response.email, response.office);
            addToTeam(manager);
            promptSelections();
        });
}
// Engineer logic
function promptEngineer() {
    console.log(chalk.bold.greenBright("Engineer"));
    promptUserEngineer()
        .then(response => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github);
            addToTeam(engineer);
            promptSelections();
        });
}
// Intern logic
function promptIntern() {
    console.log(chalk.bold.greenBright("Intern"));
    promptUserIntern()
        .then(response => {
            let intern = new Intern(response.name, response.id, response.email, response.school);
            addToTeam(intern);
            promptSelections();
        });
}
// Employee logic
function addToTeam(employee) {
    team.addEmployee(employee);
}
// Finish logic
function promptFinish() {
    console.log(`All Done! Generating HTML...`);
    // Build the HTML Strings
    buildCardString(team);
}
// Build HTML string for all employee cards
function buildCardString(obj) {
    // console.log(obj.teamName);
    // console.log(...obj.manager);
    // console.log(...obj.engineer);
    // console.log(...obj.intern);
    let string = "";
    let aObjPropertyValues = Object.values(obj)
    console.log(aObjPropertyValues[3]);

    // Loop thru items 1 - 3 of object property value array and build the all card string dynamically
    for (let i = 1; i < 4; i++) {

        let aRole = Object.values(obj)[i];
        // console.log(aRole);




        for (let j = 0; j < aRole.length; j++) {

            let employee = aRole[j];
            console.log(employee.name);
            console.log(employee.role);

            if (employee.role != "undefined") {

                element = Object.values(obj)[i][j];
                let sUniqueHTML;
                if (element.officeNumber) { sUniqueHTML = `<p class="card-body-tile">Office: ${element.officeNumber}</p>` }
                if (element.github) { sUniqueHTML = `<p class="card-body-tile">Github: ${element.github}</p>` }
                if (element.school) { sUniqueHTML = `<p class="card-body-tile">School: ${element.school}</p>` }
                string += `
            
            <div class="card ms-3 mt-3">
    
                        <div class="card-heading">
                            <div class="heading-content m-2">
                                <h5>${element.name}</h5>
                                    <h6><i class="fas fa-mug-hot"></i> ${element.role}</h4>
                            </div>
                        </div>
    
                        <div class="card-body">
                            <div class="body-content">
                                <p class="card-body-tile">ID: ${element.id}</p>
                                <p class="card-body-tile">Email: <a href="mailto: ${element.email}">${element.email}</a></p>
                                ${sUniqueHTML}
                            </div>
                        </div>
                    </div>
    
            `
            }

        }

    }
    console.log(`Current string= ${string}`);




}


const init = () => {
    console.log(chalk.bold.blue('Team Profile Generator'));
    console.log(`
    Hello!

            `+ chalk.underline('Thank you') + ` SO much for using` + chalk.bold.blue('Team Profile Generator') + `! Hope you find it to be very useful.
    Please begin by entering the Team's name! :)
        `);
    promptTeam();
}

// Run script on call
init();


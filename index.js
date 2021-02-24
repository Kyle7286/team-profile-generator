// libraries
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
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
            message: 'Name of Manager:',
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
            message: 'Name of Engineer:',
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
            message: 'Name of Engineer:',
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
    console.log(`
    Hello! Thank you for using Team Profile Generator!  Hope you find it to be very useful.
    Please begin by entering the Manager's information...`);
    promptManager()
}


function promptSelections() {
    promptUserSelections()
        .then(response => {
            console.log("Selected something...");
            if (response.selection === "Engineer") { promptEngineer(); }
            if (response.selection === "Intern") { promptIntern(); }
            if (response.selection === "Finish") { promptFinish(); }
        });
}

function promptManager() {
    promptUserManager()
        .then(response => {
            console.log("Finished Manager...");
            promptSelections();
        });
}
function promptEngineer() {
    promptUserEngineer()
        .then(response => {
            console.log("Finished Engineer");
            promptSelections();
        });
}
function promptIntern() {
    promptUserIntern()
        .then(response => {
            console.log("Finished Intern");
            promptSelections();
        });
}

function promptFinish() {
    console.log("All Done! Generating HTML....");
}

// Run script on call
const team = new Team("Right Networks");
init();


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

// Do something with the prompts 
const addManager = ({
    name,
    id,
    email,
    office
}) => {


    console.log(`${name} | ${id} | ${email}, ${office}`) //something here
}

const init = () => {
    console.log(`Hello! Thank you for using Team Profile Generator!  Hope you find it to be very useful.
    Please begin by entering the Manager's information...`);

    promptUserManager()
        .then(response => {

            console.log(response);
            addManager(response);

            // writeFileAsync("./generated/README.md", readme)
            //     .then(() => console.log("Success"))
            //     .catch(err => console.log(err));
        });
}

select

// Run script on call
init();

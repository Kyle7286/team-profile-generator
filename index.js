// libraries
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const util = require('util');
const emailValidator = require('email-validator');
// convert writeFile (from FS) to async
const writeFileAsync = util.promisify(fs.writeFile);
// Classes
const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { getMaxListeners } = require('process');
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
            validate: val => {
                if (!/^[a-z]+$/gi.test(val)) {
                    return "Please enter letters only...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
            validate: val => {
                if (!/^[0-9]+$/gi.test(val)) {
                    return "Please enter numbers only...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
            validate: val => {
                if (!emailValidator.validate(val)) {
                    return "Please enter email format...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'office',
            validate: val => /[a-z0-9]/gi.test(val)

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
            validate: val => {
                if (!/^[a-z]+$/gi.test(val)) {
                    return "Please enter letters only...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
            validate: val => {
                if (!/^[0-9]+$/gi.test(val)) {
                    return "Please enter numbers only...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
            validate: val => {
                if (!emailValidator.validate(val)) {
                    return "Please enter email format...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'github',
            validate: val => {
                if (!/([a-z0-9]+)/gi.test(val)) {
                    return "Please enter github account format with no symbols...";
                }
                return true;
            }
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
            validate: val => {
                if (!/^[a-z]+$/gi.test(val)) {
                    return "Please enter letters only...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
            validate: val => {
                if (!/^[0-9]+$/gi.test(val)) {
                    return "Please enter numbers only...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
            validate: val => {
                if (!emailValidator.validate(val)) {
                    return "Please enter email format...";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'School:',
            name: 'school',
            validate: val => {
                if (!/^[a-z]+$/gi.test(val)) {
                    return "Please enter letters only...";
                }
                return true;
            }
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
// When user selects finish
function promptFinish() {
    console.log(`All Done! Generating HTML...`);
    // Build the HTML Strings
    const sCards = buildCardString(team);
    const sHTML = buildHTMLString(sCards);
    const sStyle = buildStyleSheet();

    writeFileAsync("./index.html", sHTML)
        .then(() => console.log("Success"))
        .catch(err => console.log(err));


    writeFileAsync("./style.css", sStyle)
        .then(() => console.log("Success"))
        .catch(err => console.log(err));

}
// Build the entire HTML page
function buildHTMLString(string) {
    return `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
    <link href="./style.css" rel="stylesheet">

    <title>Team Profile Generator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 pt-3 pb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
                ${string}
        </div>
    </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>
    <script src="./teamprofile.js"></script>
</body>
</html>`
}
// Build HTML string for all employee cards
function buildCardString(obj) {
    let aObjPropertyValues = Object.values(obj)
    console.log(aObjPropertyValues[3]);
    let string = "";
    // Loop thru items 1 - 3 of object property value array and build the all card strings dynamically
    for (let i = 1; i < 4; i++) {
        let aRole = Object.values(obj)[i];
        for (let j = 0; j < aRole.length; j++) {

            let employee = aRole[j];
            console.log(employee.name);
            console.log(employee.role);

            // If an employee exists in the current array, create card
            if (employee.role != "undefined") {

                let element = Object.values(obj)[i][j];
                let sUniqueHTML;
                let sRole = element.role.charAt(0).toUpperCase() + element.role.slice(1);

                // If specific role, grab sepecific information; set specific font awesome string
                if (element.officeNumber) {
                    sUniqueHTML = `<p class="card-body-tile">Office: ${element.officeNumber}</p>`;
                    sFontAwesome = `<i class="fas fa-mug-hot"></i>`;
                }
                if (element.github) {
                    sUniqueHTML = `<p class="card-body-tile">Github: ${element.github}</p>`;
                    sFontAwesome = `<i class="fas fa-glasses"></i>`;
                }
                if (element.school) {
                    sUniqueHTML = `<p class="card-body-tile">School: ${element.school}</p>`;
                    sFontAwesome = `<i class="fas fa-graduation-cap"></i>`;
                }


                string += `
            <div class="col d-flex justify-content-center">
                <div class="card ms-3 mt-3">    
                    <div class="profile-picture">
                        <i class="fas fa-user" style="font-size: 20px;"></i>
                    </div>
                    <div class="card-heading">
                        <div class="heading-content m-2">
                            <h5>${element.name}</h5>
                                <h6>${sFontAwesome} ${sRole}</h6>
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
            </div>
            `
            }

        }

    }
    return string;
}
function buildStyleSheet() {
    return `body {
            background-image: url("https://media2.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/200.gif");
            background-size: cover;
           }
        .continer {
            position: fixed;
        }
        /* Header Styling */
        .team-heading {
            /* background-color: #3A6DA1; */
            background-color: black;
            color: white;
            font-family: 'Roboto', sans-serif;
        }
        /* Link Styling */
        a {
            text-decoration: none;
            
        }
        a:hover {
            color: rgb(1, 184, 250);
        }
        /* Card Styling */
        .card {
            position: relative;
            max-width: 12rem;
            min-width: 12rem;
            border-style: none;
            box-shadow: 2px 2px 2px 2px #777777;
            font-size: 8pt;
            font-family: 'Roboto', sans-serif;
        }
        .card-heading {
            background-color: #0086DD;
            color: white;
        }
        .fas {
            color: #ffff;
        }
        .card-body  {
            background-color: #F7F8F9;
        }
        .card-body-tile {
            background-color: #FFFFFF;
            margin: .1rem;
            padding: .5rem; 
        }
        .profile-picture {
            position:absolute;
            right: 10px;
            top: 10px;
            text-align: center
        }`
}

// Begin Script
const init = () => {
    console.log(chalk.bold.blue('Team Profile Generator'));
    console.log(`
    Hello!

            `+ chalk.underline('Thank you') + ` SO much for using ` + chalk.bold.blue('Team Profile Generator') + `! Hope you find it to be very useful.
    Please begin by entering the Team's name! :)
        `);
    promptTeam();
}

// Run script on call
init();


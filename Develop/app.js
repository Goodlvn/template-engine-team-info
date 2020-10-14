const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

///----------------------------------------------------------///----------------------------------------------------------

function addTeamMember() {
    inquirer
        .prompt([

            {
                type: "list",
                message: "What kind of team member would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "All Done"],
                name: "memberClass",
            },
        ])
        .then(answer => {

            switch (answer.memberClass) {

                case "Manager":
                    console.log("You chose Manager");
                    promptManagerQs();
                    break;

                case "Engineer":
                    console.log("You chose Engineer");
                    promptEngineerQs();
                    break;

                case "Intern":
                    console.log("You chose Intern");
                    promptInternQs();
                    break;

                case "All Done":
                    fs.writeFile(outputPath, render(teamMembers), err => {
                        if(err) throw err;
                        console.log("Congrats! Check out your Team!");
                    });
                    break;
            };
        })
        .catch(() => {
            console.log("Can not render list in current environment");
        });
};

function promptManagerQs() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is the manager's name?",
                name: "name",
                validate: function validateNameBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the manager's ID?",
                name: "id",
                validate: function validateIdBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "email",
                validate: function validateEmailBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
                validate: function validateOfficeBlank(name){
                    return name !== '';
                },
            },
        ])
        .then(answers => {
            createTMobj(answers, "Manager");
        })
        .catch(() => {
            console.log("Can not render list in current environment");
        })
}

function promptEngineerQs() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
                validate: function validateNameBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the engineer's ID?",
                name: "id",
                validate: function validateIdBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "email",
                validate: function validateEmailBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the engineer's Git Hub username?",
                name: "github",
                validate: function validateGitBlank(name){
                    return name !== '';
                },
            },
        ])
        .then(answers => {
            createTMobj(answers, "Engineer");
        })
        .catch(() => {
            console.log("Can not render list in current environment");
        });
}

function promptInternQs() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is the intern's name?",
                name: "name",
                validate: function validateNameBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the intern's ID?",
                name: "id",
                validate: function validateIdBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "email",
                validate: function validateEmailBlank(name){
                    return name !== '';
                },
            },
            {
                type: "input",
                message: "What school is the intern coming from?",
                name: "school",
                validate: function validateSchoolBlank(name){
                    return name !== '';
                },
            },
        ])
        .then(answers => {
            createTMobj(answers, "Intern");
        })
        .catch(() => {
            console.log("Can not render list in current environment");
        });
};

function createTMobj(answers, type) {
    let newTM;
    switch (type) {
        case "Manager":
            newTM = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            break;
        case "Engineer":
            newTM = new Engineer(answers.name, answers.id, answers.email, answers.github);
            break;
        case "Intern":
            newTM = new Intern(answers.name, answers.id, answers.email, answers.school);
            break;
    };

    teamMembers.push(newTM);
    addTeamMember();
};




addTeamMember();


























// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

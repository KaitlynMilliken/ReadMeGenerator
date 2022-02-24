// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateReadMe")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title for your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description: "
        },
        {
            type: "input",
            name: "use",
            message: "What is this project going to be used for?"
        },
        {
            type: "input",
            name: "instructions",
            message: "Are there an instructions for install?",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license! ",
            choices: [
                "Apache",
                "Creative Commons",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "troubleshoot",
            message: "Provide instructions for troubleshooting:"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = JSON.stringify(data);
    fs.writeFile(fileName, data, (err) => {
        console.log(err);
    });
}


function init() {
    const userInput = inquirer.prompt(questions).then(answers => {
        writeToFile("./README.md", answers);
    }).catch(err => {
        console.log(err);
    });
}

init();

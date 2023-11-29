// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is the project installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the project used?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the project be tested?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('newREADME.md has been generated!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('newREADME.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();

// TODO: We need inquirer for the Node , ls for the write file function and generateMarkdown 
const inquirer = require('inquirer');
const ls = require('ls');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', message: 'what is your GitHub adress?', name: 'gitHuB' },
    { type: 'input', message: 'what is your email adress?', name: 'email' },
    { type: 'input', message: 'What is your project\'s name ?', name: 'project' },
    { type: 'input', message: 'Please write a description of your project:', name: 'description' },
    { type: 'list', message: 'License:', name: 'license', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('log.txt', result, (err) =>
    err ? console.error(err) : console.log('Success!')
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            generateMarkdown(response, writeToFile)
        );
}

// Function call to initialize app
init();



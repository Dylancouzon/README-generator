// TODO: We need inquirer for the Node , ls for the write file function and generateMarkdown 
const inquirer = require('inquirer');
const ls = require('ls');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = new Map([
    ['input', 'what is your GitHub adress?', 'gitHuB'], 
    ['input', 'what is your email adress?', 'email'], 
    ['input', 'What is your project\'s name ?', 'project'],
    ['input', 'Please write a description of your project:', 'description'],
    ['list', 'License:', 'license', ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']]
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



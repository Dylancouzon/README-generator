// TODO: We need inquirer for the Node , ls for the write file function and generateMarkdown 
const markdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
//     WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    { type: 'input', message: 'what is your GitHub adress?', name: 'gitHuB' },
    { type: 'input', message: 'what is your email adress?', name: 'email' },
    { type: 'input', message: 'What is your project\'s name ?', name: 'project' },
    { type: 'input', message: 'Please write a description of your project:', name: 'description' },
    { type: 'list', message: 'License:', name: 'license', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
    { type: 'input', message: 'Installation inscructions:', name: 'install' },
    { type: 'input', message: 'Utilization instructions:', name: 'usage' },
    { type: 'input', message: 'How do we test it?', name: 'test' },
    { type: 'input', message: 'How do we contribute to the project?', name: 'contribute' }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName);
    fs.writeFile(fileName, data, (err) =>
         err ? console.log('Error!') : console.log('Creating file: '+ fileName));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const data = markdown.generateMarkdown(response)
            let fileName = response.project.split(" ").join("");
            writeToFile(fileName + '.md', data);
        }
        );
}

// Function call to initialize app
init();



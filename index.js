// Import required packages
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for usage:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache_2.0', 'GPL_3.0', 'BSD_3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide any test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Successfully created README.md');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('Error initializing app:', error);
    });
}

// Call to initialize app
init();

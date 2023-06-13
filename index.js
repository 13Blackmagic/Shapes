const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shape');

const shapeSelection = ["Circle", "Square", "Triangle"];

const validateUserInput = (input) => {
    if (input) {
        return true;
    } else {
        return 'Please enter a value.';
    }
};

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: shapeSelection,
    },
    {
        type: 'input',
        name: 'size',
        message: 'What size would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'What background color would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'borderColor',
        message: 'What border color would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'borderWidth',
        message: 'What border width would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'borderRadius',
        message: 'What border radius would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'padding',
        message: 'What padding would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'margin',
        message: 'What margin would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'textSize',
        message: 'What text size would you like to draw?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to draw?',
        validate: validateUserInput,
    },
    
    function init() {
    inquirer.createPromptModule(questions).then(data=> writeToFile("index.html", generateHTML(data)))}
    

];

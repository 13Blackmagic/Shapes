const util = require('util');
const fs = require('fs');
const path = require('path');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'shape',
        message: 'What shape would you like to draw?',
    },
    {
        type: 'input',
        name: 'size',
        message: 'What size would you like to draw?',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to draw?',
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'What background color would you like to draw?',
    },
    {
        type: 'input',
        name: 'borderColor',
        message: 'What border color would you like to draw?',
    },
    {
        type: 'input',
        name: 'borderWidth',
        message: 'What border width would you like to draw?',
    },
    {
        type: 'input',
        name: 'borderRadius',
        message: 'What border radius would you like to draw?',
    },
    {
        type: 'input',
        name: 'padding',
        message: 'What padding would you like to draw?',
    },
    {
        type: 'input',
        name: 'margin',
        message: 'What margin would you like to draw?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like to draw?',
    },
    {
        type: 'input',
        name: 'textSize',
        message: 'What text size would you like to draw?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to draw?',
    },
    {
        type: 'input',
        name: 'textPosition',
        message: 'What text position would you like to draw?',
    },
];
const promptUser = () => {
    return inquirer.prompt(questions);
}
const writeToFile = (fileName, data) => {
    return writeFile(fileName, data);
}
const init = async () => {
    try {
        const answers = await promptUser();
        const markdown = generateMarkdown(answers);
        await writeToFile('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
}
init();




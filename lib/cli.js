const inquirer = require('inquirer');
const { join} = require('path');
const { writeFile } = require('fs/promises');

class CLI {

    run() {
        return inquirer
        .prompt([
    {
        type: 'input',
        name: 'shape',
        message: 'What shape would you like to draw?',
        prompt: 'circle, square, or triangle',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like?',
        prompt: 'red, blue, green, yellow, orange, purple, pink, black, white, brown, grey, or gold',
    },
    {
        type: 'input',
        name: 'text color',
        message: 'What three letters would you like?',
        prompt : 'red, blue, green, yellow, orange, purple, pink, black, white, brown, grey, or gold',
    },
])
.then((answers) => {
    const html = document.render();
    return writeFile(join(process.cwd(), 'index.html'), html);
}
)
.then(() => console.log('Successfully created index.html'))
.catch((err) => console.error(err));
    }
}
module.exports = CLI;




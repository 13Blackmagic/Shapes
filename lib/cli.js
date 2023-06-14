const Logo = require('./logo');
const inquirer = require('inquirer');
const { join} = require('path');
const { writeFile } = require('fs/promises');
const { Circle, Square, Triangle } = require('./shape');
class CLI {

    run() {
        return inquirer
        .prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'text',
        name: 'color',
        message: 'What color would you like?',
        inquirer: 'red, blue, green, yellow, orange, purple, pink, black, white, brown, grey, or gold',
    },
    {
        type: 'input',
        name: 'text ',
        message: 'What three letters would you like?',
        inquirer : 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
    },
])
.then((answers) => {
    const { shape, color, text } = answers;
    switch (shape) {
        case 'circle':
        new Circle(color, text);
        break;
        case 'square':
        new Square(color, text);
        break;
        case 'triangle':
        new Triangle(color, text);
        break;
    }

    shape.setColor(color);

    let logo = new Logo();
    logo.setShape(shape);
    logo.setText(text, color);

    const html = logo.render();

    return writeFile(join(process.cwd(), 'index.html'), html);
}
)
.then(() => console.log('Successfully created index.html'))
.catch((err) => console.error(err));
    }
}
module.exports = CLI;




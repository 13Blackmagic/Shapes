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
        name: 'shapeType',
        message: 'What shape would you like to draw?',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'text',
        name: 'shapeColor',
        message: 'What color would you like?',
        inquirer: 'red, blue, green, yellow, orange, purple, pink, black, white, brown, grey, or gold',
    },
    {
        type: 'text',
        name: 'textColor',
        message: 'What color would you like?',
        inquirer: 'red, blue, green, yellow, orange, purple, pink, black, white, brown, grey, or gold',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What three letters would you like?',
        inquirer : 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
    },
])
.then((answers) => {
    let shape;
    const { shapeType, shapeColor,textColor, text } = answers;
    switch (shapeType) {
        case 'circle':
        shape = new Circle(shapeColor, text);
        break;
        case 'square':
        shape = new Square(shapeColor, text);
        break;
        case 'triangle':
        shape = new Triangle(shapeColor, text);
        break;
    }

    shape.setColor(shapeColor);

    let logo = new Logo();
    logo.setShape(shape);
    console.log ("text = " + text);
    logo.setText(text,textColor);

    const html = logo.render();

    return writeFile(join(process.cwd(), 'index.html'), html);
}
)
.then(() => console.log('Successfully created index.html'))
.catch((err) => console.error(err));
    }
}
module.exports = CLI;




const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shape');

const shapeSelection = ["Circle", "Square", "Triangle"];

function validateUserInput(input) {
    if (input === "") {
        return "Please enter a value.";
    }
    return true;
}
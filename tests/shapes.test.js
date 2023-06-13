const {circle,square, triangle } = require('./lib/shapes.js');
const {expect} = require('chai');
const {spy} = require('sinon'); 
const {createCanvas} = require('canvas');
const {writeFileSync} = require('fs');
const {join} = require('path');

describe('shapes', () => {
    describe('circle', () => {
        it('should draw a circle', () => {
            const canvas = createCanvas(100, 100);
            const context = canvas.getContext('2d');
            circle(context, 50, 50, 50);
            const buffer = canvas.toBuffer();
            writeFileSync(join(__dirname, 'circle.png'), buffer);
        });
    });
    describe('square', () => {
        it('should draw a square', () => {
            const canvas = createCanvas(100, 100);
            const context = canvas.getContext('2d');
            square(context, 50, 50, 50);
            const buffer = canvas.toBuffer();
            writeFileSync(join(__dirname, 'square.png'), buffer);
        });
    });
    describe('triangle', () => {
        it('should draw a triangle', () => {
            const canvas = createCanvas(100, 100);
            const context = canvas.getContext('2d');
            triangle(context, 50, 50, 50);
            const buffer = canvas.toBuffer();
            writeFileSync(join(__dirname, 'triangle.png'), buffer);
        });
    });
    });

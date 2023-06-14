class Shape {
    constructor() {
        this.color = '';

    }

    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="200,10 250,190 160,210" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}


class Square extends Shape {
    render() {
        return `<rect width="100" height="100" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

module.exports = { Triangle, Square, Circle };
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
        return `<polygon points="150,80 244,182 56, 182" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}


class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

module.exports = { Triangle, Square, Circle };
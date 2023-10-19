function circle(letters, color) {
    const svg = `
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="${color}" stroke-width="3" fill="none" />
            <text x="50%" y="50%" text-anchor="middle" stroke="${color}" stroke-width="1px" dy=".3em">${letters}</text>
        </svg>
    `;
    return svg;
}

function square(letters, side, color) {
    const svg = `
        <svg width="${side}" height="${side}" xmlns="http://www.w3.org/2000/svg">
            <rect width="${side}" height="${side}" fill="${color}" />
            <text x="${side/2}" y="${side/2}" text-anchor="middle" dy=".3em">${letters}</text>
        </svg>
    `;
    return svg;
}

function triangle(letters, base, height, color) {
    const svg = `
        <svg width="${base}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 ${base},0 ${base/2},${height}" fill="${color}" />
            <text x="${base/2}" y="${height/2}" text-anchor="middle" dy=".3em">${letters}</text>
        </svg>
    `;
    return svg;
}

class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}


class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}

class Square extends Shape {
    constructor(id, x, y, side) {
        super(id, x, y);
        this.side = side;
    }
}

class Triangle extends Shape {
    constructor(id, x, y, base, height) {
        super(id, x, y);
        this.base = base;
        this.height = height;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
    circle,
    square,
    triangle,
};



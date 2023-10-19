class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}


class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
class Square extends Shape {
    constructor(id, x, y, side) {
        super(id, x, y)
        this.side = side
    }
}
class Triangle extends Shape {
    constructor(id, x, y, side) {
        super(id, x, y)
        this.side = side
    }
}


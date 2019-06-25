class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        let sideA = Math.abs(firstPoint.x - secondPoint.x) ** 2;
        let sideB = Math.abs(firstPoint.y - secondPoint.y) ** 2;
        let distance = Math.sqrt(sideA + sideB);

        return distance;
    }
}

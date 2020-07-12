class Point {
    get type() {
        return 'Point';
    }

    constructor(coordinate, crs) {
        this.coordinates = coordinate
        this.crs = crs || null;
    }
}

module.exports = {Point};

const {transform} = require('proj4');

class Point {
    get type() {
        return 'Point';
    }

    constructor(coordinate, crs) {
        this.coordinates = coordinate
        this.crs = crs || null;
    }

    transform(source, target) {
        this.crs = target;
    }
}

module.exports = {Point};

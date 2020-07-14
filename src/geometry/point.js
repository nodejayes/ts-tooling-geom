const {getEpsg, reproject} = require('../reference_system/transform');

class Point {
    get type() {
        return 'Point';
    }

    constructor(coordinate, crs) {
        this.coordinates = coordinate
        this.crs = crs || null;
    }

    transform(target) {
        this.coordinates = reproject(getEpsg(this.crs.srId), getEpsg(target.srId), [this.coordinates])[0];
        this.crs = target;
    }
}

module.exports = {Point};

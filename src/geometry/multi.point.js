require('ts-tooling');

class MultiPoint {
    get type() {
        return 'MultiPoint';
    }

    constructor(points, crs) {
        if (Array.isArray(points) && points.length > 0 && points[0].coordinates) {
            this.coordinates = points.Convert(p => p.coordinates);
            if (points[0].crs) {
                this.crs = points[0].crs;
            }
        } else {
            this.coordinates = points;
            this.crs = crs || null;
        }
    }
}

module.exports = {MultiPoint};

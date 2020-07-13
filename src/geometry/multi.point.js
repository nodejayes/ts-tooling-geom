require('ts-tooling');

class MultiPoint {
    get type() {
        return 'MultiPoint';
    }

    constructor(points, crs) {
        this.coordinates = points;
        this.crs = crs || null;
        if (Array.isArray(points) && points.Any() && points.ElementAt(0).coordinates) {
            this.coordinates = points.Convert(p => p.coordinates);
            if (points.ElementAt(0).crs) {
                this.crs = points.ElementAt(0).crs;
            }
        }
    }
}

module.exports = {MultiPoint};

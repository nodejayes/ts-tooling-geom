require('ts-tooling');

class Line {
    get type() {
        return 'LineString';
    }

    constructor(points, crs) {
        this.crs = crs || null;
        this.coordinates = points;
        if (Array.isArray(points) && points.length > 0 && points.ElementAt(0).coordinates) {
            this.coordinates = points.Convert(p => p.coordinates);
            if (points.ElementAt(0).crs) {
                this.crs = points.ElementAt(0).crs;
            }
        }
    }
}

module.exports = {Line};

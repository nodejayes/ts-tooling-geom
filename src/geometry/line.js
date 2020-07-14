const {reproject, getEpsg} = require('../reference_system/transform');
require('ts-tooling');

class Line {
    get type() {
        return 'LineString';
    }

    constructor(points, crs) {
        this.crs = crs || null;
        this.coordinates = points;
        if (Array.isArray(points) && points.Any() && points.ElementAt(0).coordinates) {
            this.coordinates = points.Convert(p => p.coordinates);
            if (points.ElementAt(0).crs) {
                this.crs = points.ElementAt(0).crs;
            }
        }
    }

    transform(target) {
        this.coordinates = reproject(getEpsg(this.crs.srId), getEpsg(target.srId), this.coordinates);
        this.crs = target;
    }
}

module.exports = {Line};

const {reproject, getEpsg} = require('../reference_system/transform');
require('ts-tooling');

class MultiPolygon {
    get type() {
        return 'MultiPolygon';
    }

    constructor(polygons, crs) {
        this.coordinates = polygons;
        this.crs = crs || null;
        if (Array.isArray(polygons) && polygons.Any() && polygons.ElementAt(0).coordinates) {
            this.coordinates = polygons.Convert(p => p.coordinates);
            if (polygons.ElementAt(0).crs) {
                this.crs = polygons.ElementAt(0).crs;
            }
        }
    }

    transform(target) {
        this.coordinates = this.coordinates.Convert(p => p.Convert(ring => reproject(getEpsg(this.crs.srId), getEpsg(target.srId), ring)));
        this.crs = target;
    }
}

module.exports = {MultiPolygon};

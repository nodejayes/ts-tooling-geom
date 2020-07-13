const {getEpsg, reproject} = require('../reference_system/transform');
require('ts-tooling');

class Polygon {
    get type() {
        return 'Polygon';
    }

    constructor(rings, crs) {
        this.coordinates = rings;
        this.crs = crs || null;
        if (Array.isArray(rings) && rings.Any() && rings.ElementAt(0).coordinates) {
            this.coordinates = rings.Convert(l => l.coordinates);
            if (rings.ElementAt(0).crs) {
                this.crs = rings.ElementAt(0).crs;
            }
        }
    }

    transform(target) {
        this.coordinates = this.coordinates.Convert(ring => reproject(getEpsg(target.srId), getEpsg(this.crs.srId), ring));
    }
}

module.exports = {Polygon};

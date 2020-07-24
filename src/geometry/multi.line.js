const {reproject, getEpsg} = require('../reference_system/transform');
const {GeometryTypes} = require('../definitions/geometry.types');
require('ts-tooling');

class MultiLine {
    get type() {
        return GeometryTypes.multiLine;
    }

    constructor(lines, crs) {
        this.coordinates = lines;
        this.crs = crs || null;
        if (Array.isArray(lines) && lines.Any() && lines.ElementAt(0).coordinates) {
            this.coordinates = lines.Convert(l => l.coordinates);
            if (lines.ElementAt(0).crs) {
                this.crs = lines.ElementAt(0).crs;
            }
        }
    }

    transform(target) {
        this.coordinates = this.coordinates.Convert(l => reproject(getEpsg(this.crs.srId), getEpsg(target.srId), l));
        this.crs = target;
    }
}

module.exports = {MultiLine};

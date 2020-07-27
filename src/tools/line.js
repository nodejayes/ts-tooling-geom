const {Point} = require('../geometry/point');
const {DistanceTool} = require('./distance');

class LineTool {
    constructor() {
        this.distanceTool = new DistanceTool();
    }

    travelAlong(line, distance) {
        if (distance < 0) {
            throw new Error('you must travel a Distance greater than 0');
        }
        if (distance === 0) {
            return new Point(line.coordinates[0], line.crs);
        }

        let pt = new Point(line.coordinates[1], line.crs);
        let traveled = 0.0;
        line.coordinates.ForSegment((current, next) => {
            const pt1 = new Point(current, line.crs);
            const pt2 = new Point(next, line.crs);
            const segementLength = this.distanceTool.haversine(pt1, pt2);
            traveled += segementLength;
            if (distance > traveled) {
                return;
            }
            const offset = traveled - distance;
            if (offset === 0) {
                pt = new Point(next, line.crs);
                return;
            }
            pt = new Point([
                next[0] * offset / segementLength,
                next[1] * offset / segementLength,
            ], line.crs);
        });
        return pt;
    }
}

module.exports = {LineTool};

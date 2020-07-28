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
            const segementLength = this.distanceTool.haversine(pt1, pt2) * 1000;
            traveled += segementLength;
            if (distance > traveled) {
                return;
            }
            const offset = traveled - distance;
            if (offset === 0) {
                pt = new Point(next, line.crs);
                return;
            }
            const diffX = Math.abs(current[0] - next[0]);
            const diffY = Math.abs(current[1] - next[1]);
            const newX = (current[0] === 0 ? 0.000001 : current[0]) * (offset * diffX / segementLength);
            const newY = (current[1] === 0 ? 0.000001 : current[1]) * (offset * diffY / segementLength);
            pt = new Point([newX, newY], line.crs);
        });
        return pt;
    }
}

module.exports = {LineTool};

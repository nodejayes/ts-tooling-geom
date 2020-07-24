const {EarthRadiusKM} = require('../definitions/earth');
const {DegToRad} = require('../definitions/math');
const {pythagoras} = require('../vector/math/pythagoras');

class DistanceTool {
    sphericalTriangle(pt1, pt2) {
        const lat1 = pt1.coordinates[1] * DegToRad;
        const lon1 = pt1.coordinates[0] * DegToRad;
        const lat2 = pt2.coordinates[1] * DegToRad;
        const lon2 = pt2.coordinates[0] * DegToRad;
        return EarthRadiusKM * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));
    }
    haversine(pt1, pt2) {
        const lat1 = pt1.coordinates[1];
        const lon1 = pt1.coordinates[0];
        const lat2 = pt2.coordinates[1];
        const lon2 = pt2.coordinates[0];

        const x1 = lat2 - lat1;
        const dLat = x1 * DegToRad;
        const x2 = lon2 - lon1;
        const dLon = x2 * DegToRad;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * DegToRad) * Math.cos(lat2 * DegToRad) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        return EarthRadiusKM * c
    }
    planar(pt1, pt2) {
        return pythagoras(pt1.coordinates[0], pt1.coordinates[1], pt2.coordinates[0], pt2.coordinates[1]);
    }
}

module.exports = {DistanceTool};

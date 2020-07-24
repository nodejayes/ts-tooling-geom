const {RadToDeg} = require('../../definitions/math');

function cosineTheorem(edge1, edge2, edge3, inDegrees) {
    const a2 = Math.pow(edge1, 2);
    const b2 = Math.pow(edge2, 2);
    const c2 = Math.pow(edge3, 2);
    const bc2 = -(2 * edge2 * edge3);
    const cosAlpha = (a2 - (b2 + c2)) / bc2;
    const res = Math.acos(cosAlpha);
    return !inDegrees ? res : res * RadToDeg;
}

module.exports = {cosineTheorem};

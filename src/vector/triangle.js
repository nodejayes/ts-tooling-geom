const {pythagoras, pythagorasLength} = require('./math/pythagoras');
const {cosineTheorem} = require('./math/cosine.theorem');
const {DegToRad} = require('../definitions/math');

function snapHeight(l1, l2, l3, h) {
    const side1 = l3 - pythagorasLength(l1, h);
    const side2 = l3 - pythagorasLength(l2, h);
    return side1 < 0 || side2 < 0 ?
        side1 < side2 ?
            l2 :
            l1 :
        h;
}

class Triangle {
    get edgeCB() {
        return pythagoras(this.b[0], this.b[1], this.c[0], this.c[1]);
    }

    get edgeAC() {
        return pythagoras(this.c[0], this.c[1], this.a[0], this.a[1]);
    }

    get edgeAB() {
        return pythagoras(this.b[0], this.b[1], this.a[0], this.a[1]);
    }

    get angleAlpha() {
        return cosineTheorem(this.edgeCB, this.edgeAC, this.edgeAB, true);
    }

    get angleBeta() {
        return cosineTheorem(this.edgeAC, this.edgeAB, this.edgeCB, true);
    }

    get angleGamma() {
        return cosineTheorem(this.edgeAB, this.edgeAC, this.edgeCB, true);
    }

    get diameter() {
        return this.edgeAB / Math.sin(this.angleGamma);
    }

    get radius() {
        return this.diameter / 2;
    }

    get scope() {
        return this.edgeAB + this.edgeAC + this.edgeCB;
    }

    constructor(ptA, ptB, ptC) {
        this.a = ptA.coordinates;
        this.b = ptB.coordinates;
        this.c = ptC.coordinates;
    }

    heightFrom(point) {
        switch (point) {
            case 'A':
                return this.edgeAB * Math.sin(this.angleBeta * DegToRad)
            case 'B':
                return this.edgeCB * Math.sin(this.angleGamma * DegToRad)
            case 'C':
                return this.edgeAC * Math.sin(this.angleAlpha * DegToRad)
            default:
                return 0.0
        }
    }

    shortestDistance(point) {
        const h = this.heightFrom(point);
        switch (point) {
            case 'A':
                return snapHeight(this.edgeAB, this.edgeAC, this.edgeCB, h);
            case 'B':
                return snapHeight(this.edgeAB, this.edgeCB, this.edgeCB, h);
            case 'C':
                return snapHeight(this.edgeCB, this.edgeAC, this.edgeCB, h);
            default:
                return 0.0
        }
    }
}

module.exports = {Triangle};

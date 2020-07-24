const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Triangle} = require('./triangle');
const {Point} = require('../geometry/point');

describe('Triangle Tests', () => {
    const a = new Point([0,0]);
    const b = new Point([5,1]);
    const c = new Point([3,2]);

    describe('constructor', () => {
        it('can construct one by Points', () => {
            const t = new Triangle(a, b, c);
            assert.deepEqual(t.a, a.coordinates);
            assert.deepEqual(t.b, b.coordinates);
            assert.deepEqual(t.c, c.coordinates);
        });
    });
    describe('Properties', () => {
        it('edgeAB', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.edgeAB, 5.0990195135927845);
        });
        it('edgeAC', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.edgeAC, 3.605551275463989);
        });
        it('edgeCB', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.edgeCB, 2.23606797749979);
        });
        it('angleAlpha', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.angleAlpha, 22.380135242153074);
        });
        it('angleBeta', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.angleBeta, 37.874983972971805);
        });
        it('angleGamma', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.angleGamma, 119.74488231457212);
        });
        it('all 3 Angles has 180 Degree', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.angleAlpha+t.angleBeta+t.angleGamma, 180.000001529697);
        });
        it('diameter', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.diameter, 14.308909704985034);
        });
        it('radius', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.radius, t.diameter/2);
        });
        it('scope', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.scope, 10.940638766556564);
        });
    });
    describe('[Method]: heightFrom', () => {
        it('from Point A', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.heightFrom('A'), 3.130495169777232);
        });
        it('from Point B', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.heightFrom('B'), 1.9414506856750202);
        });
        it('from Point C', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.heightFrom('C'), 1.3728129465925847);
        });
        it('from empty string', () => {
            const t = new Triangle(a, b, c);
            assert.equal(t.heightFrom(''), 0);
        });
    });
    describe('[Method]: shortestDistance', () => {
        it('inside', () => {
            const t = new Triangle(
                new Point([386130, 5692254]),
                new Point([386106.870525168, 5692632.47844243]),
                new Point([386211.636432768, 5692238.19060928]));
            assert.equal(t.edgeAB, 379.18452498739);
            assert.equal(t.edgeAC, 83.15313577986396);
            assert.equal(t.edgeCB, 407.96910515995535);
            assert.equal(t.heightFrom('A'), 74.83891952375998);
            assert.equal(t.shortestDistance('A'), 74.83891952375998);
        });
        it('outside1', () => {
            const t = new Triangle(
                new Point([386130, 5692254]),
                new Point([386408.967053963, 5692913.35517462]),
                new Point([386106.870525168, 5692632.47844243]));
            assert.equal(t.edgeAB, 715.941243046222);
            assert.equal(t.edgeAC, 379.18452498739);
            assert.equal(t.edgeCB, 412.49733501657795);
            assert.equal(t.heightFrom('A'), 292.93172291515987);
            assert.equal(t.shortestDistance('A'), 379.18452498739);
        });
        it('outside2', () => {
            const t = new Triangle(
                new Point([386130, 5692254]),
                new Point([386211.636432768, 5692238.19060928]),
                new Point([386259.794025127, 5692052.3088027]));
            assert.equal(t.edgeAB, 83.15313577986396);
            assert.equal(t.edgeAC, 239.84542527868626);
            assert.equal(t.edgeCB, 192.01874835387844);
            assert.equal(t.heightFrom('A'), 75.06238598507126);
            assert.equal(t.shortestDistance('A'), 83.15313577986396);
        });
    });
});

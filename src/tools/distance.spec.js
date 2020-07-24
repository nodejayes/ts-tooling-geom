const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Point} = require('../geometry/point');
const {ReferenceSystem} = require('../reference_system/reference.system');
const {DistanceTool} = require('./distance');

describe('Distance Tool Tests', () => {
    const shortPt1 = new Point([8.413210, 49.99170], new ReferenceSystem(4326));
    const shortPt2 = new Point([8.421820, 50.00490], new ReferenceSystem(4326));
    const longPt1 = new Point([13.37770, 52.51640], new ReferenceSystem(4326));
    const longPt2 = new Point([-9.177944, 38.69267], new ReferenceSystem(4326));
    const measure = new DistanceTool();

    describe('[Method]: sphericalTriangle', () => {
        it('short Distance', () => {
            assert.equal(measure.sphericalTriangle(shortPt1, shortPt2), 1.5933539476506335);
        });
        it('long Distance', () => {
            assert.equal(measure.sphericalTriangle(longPt1, longPt2), 2317.6309847285147);
        });
    });
    describe('[Method]: haversine', () => {
        it('short Distance', () => {
            assert.equal(measure.haversine(shortPt1, shortPt2), 1.5933539483294383);
        });
        it('long Distance', () => {
            assert.equal(measure.haversine(longPt1, longPt2), 2317.6309847285133);
        });
    });
    describe('[Method]: planar', () => {
        it('WGS84 Distance', () => {
            assert.equal(measure.planar(shortPt1, shortPt2), 0.015759825506646754);
        });
        it('Web Mercator Distance', () => {
            shortPt1.transform(new ReferenceSystem(3857));
            shortPt2.transform(new ReferenceSystem(3857));
            assert.equal(measure.planar(shortPt1, shortPt2), 2478.731094304433);
        });
    });
});

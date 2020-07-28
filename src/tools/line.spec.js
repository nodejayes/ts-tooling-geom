const {assert} = require('chai');
const {describe, it} = require('mocha');
const {LineTool} = require('./line');
const {Line} = require('../geometry/line');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('LineTool Test', () => {
    const lt = new LineTool();

    describe('[Method]: travelAlong', () => {
        it('travel line with one segment', () => {
            const l = new Line([[0,0], [1,1]], new ReferenceSystem(4326));
            const pt = lt.travelAlong(l, 100);
            assert.deepEqual(pt.coordinates, [0.5, 0.5]);
            assert.equal(pt.crs.srId, 4326);
        });
        it('travel line with multiple segments', () => {});
        it('travel line is to short', () => {});
        it('no distance to travel', () => {});
    });
});

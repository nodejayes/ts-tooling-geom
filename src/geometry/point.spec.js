const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Point} = require('./point');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('Point Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create with SrId', () => {
            const p = new Point([1,2], new ReferenceSystem(4326));
            assert.equal(p.type, 'Point');
            assert.deepEqual(p.coordinates, [1,2]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can create without SrId', () => {
            const p = new Point([1,2]);
            assert.equal(p.type, 'Point');
            assert.deepEqual(p.coordinates, [1,2]);
            assert.isNull(p.crs);
        });
    });
});

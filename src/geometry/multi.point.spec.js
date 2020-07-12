const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Point} = require('./point');
const {MultiPoint} = require('./multi.point');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('MultiPoint Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create with SrId', () => {
            const p = new MultiPoint([
                [1,2], [3,4]
            ], new ReferenceSystem(4326));
            assert.equal(p.type, 'MultiPoint');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can create without SrId', () => {
            const p = new MultiPoint([
                [1,2], [3,4]
            ]);
            assert.equal(p.type, 'MultiPoint');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.isNull(p.crs);
        });
        it('can create from point array', () => {
            const p1 = new Point([1,2], new ReferenceSystem(4326));
            const p2 = new Point([3,4], new ReferenceSystem(4326));
            const p = new MultiPoint([p1, p2], new ReferenceSystem(4326));
            assert.equal(p.type, 'MultiPoint');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can detect reference system', () => {
            const p1 = new Point([1,2], new ReferenceSystem(4326));
            const p2 = new Point([3,4], new ReferenceSystem(4326));
            const p = new MultiPoint([p1, p2]);
            assert.equal(p.type, 'MultiPoint');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
    });
});

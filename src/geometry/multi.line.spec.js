const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Line} = require('./line');
const {MultiLine} = require('./multi.line');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('MultiLine Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create with SrId', () => {
            const p = new MultiLine([
                [[1,2], [3,4]],
                [[5,6], [7,8]],
            ], new ReferenceSystem(4326));
            assert.equal(p.type, 'MultiLineString');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4]],
                [[5,6], [7,8]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can create without SrId', () => {
            const p = new MultiLine([
                [[1,2], [3,4]],
                [[5,6], [7,8]],
            ]);
            assert.equal(p.type, 'MultiLineString');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4]],
                [[5,6], [7,8]],
            ]);
            assert.isNull(p.crs);
        });
        it('can create from point array', () => {
            const l1 = new Line([[1,2], [3,4]], new ReferenceSystem(4326));
            const l2 = new Line([[5,6], [7,8]], new ReferenceSystem(4326));
            const p = new MultiLine([l1, l2], new ReferenceSystem(4326));
            assert.equal(p.type, 'MultiLineString');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4]],
                [[5,6], [7,8]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can detect reference system', () => {
            const l1 = new Line([[1,2], [3,4]], new ReferenceSystem(4326));
            const l2 = new Line([[5,6], [7,8]], new ReferenceSystem(4326));
            const p = new MultiLine([l1, l2]);
            assert.equal(p.type, 'MultiLineString');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4]],
                [[5,6], [7,8]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
    });
});

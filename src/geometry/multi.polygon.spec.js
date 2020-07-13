const {assert} = require('chai');
const {describe, it} = require('mocha');
const {MultiPolygon} = require('./multi.polygon');
const {Polygon} = require('./polygon');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('MultiPolygon Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create with SrId', () => {
            const p = new MultiPolygon([
                [[[1,2], [3,4], [5,6], [1,2]]],
            ], new ReferenceSystem(4326));
            assert.equal(p.type, 'MultiPolygon');
            assert.deepEqual(p.coordinates, [
                [[[1,2], [3,4], [5,6], [1,2]]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can create without SrId', () => {
            const p = new MultiPolygon([
                [[[1,2], [3,4], [5,6], [1,2]]],
            ]);
            assert.equal(p.type, 'MultiPolygon');
            assert.deepEqual(p.coordinates, [
                [[[1,2], [3,4], [5,6], [1,2]]],
            ]);
            assert.isNull(p.crs);
        });
        it('can create from point array', () => {
            const p1 = new Polygon([[[1,2], [3,4], [5,6], [1,2]]], new ReferenceSystem(4326));
            const p2 = new Polygon([[[10,20], [30,40], [50,60], [10,20]]], new ReferenceSystem(4326));
            const p = new MultiPolygon([p1, p2], new ReferenceSystem(4326));
            assert.equal(p.type, 'MultiPolygon');
            assert.deepEqual(p.coordinates, [
                [[[1,2], [3,4], [5,6], [1,2]]],
                [[[10,20], [30,40], [50,60], [10,20]]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can detect reference system', () => {
            const p1 = new Polygon([[[1,2], [3,4], [5,6], [1,2]]], new ReferenceSystem(4326));
            const p2 = new Polygon([[[10,20], [30,40], [50,60], [10,20]]], new ReferenceSystem(4326));
            const p = new MultiPolygon([p1, p2]);
            assert.equal(p.type, 'MultiPolygon');
            assert.deepEqual(p.coordinates, [
                [[[1,2], [3,4], [5,6], [1,2]]],
                [[[10,20], [30,40], [50,60], [10,20]]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
    });
});

const {assert} = require('chai');
const {describe, it} = require('mocha');
const {readJson} = require('./reader');

describe('JSON io Tests', () => {
    describe('[Method]: readJson', () => {
        it('read Point with CRS', () => {
            const g = readJson('{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, 'Point');
            assert.deepEqual(g.coordinates, [1,2]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read Point without CRS', () => {
            const g = readJson('{"type":"Point","coordinates":[1,2]}');
            assert.equal(g.type, 'Point');
            assert.deepEqual(g.coordinates, [1,2]);
            assert.isNull(g.crs);
        });
        it('read Line with CRS', () => {
            const g = readJson('{"type":"LineString","coordinates":[[1,2],[3,4]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, 'LineString');
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read Line without CRS', () => {
            const g = readJson('{"type":"LineString","coordinates":[[1,2],[3,4]]}');
            assert.equal(g.type, 'LineString');
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.isNull(g.crs);
        });
        it('read Polygon with CRS', () => {
            const g = readJson('{"type":"Polygon","coordinates":[[[1,2],[3,4],[1,2]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, 'Polygon');
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read Polygon without CRS', () => {
            const g = readJson('{"type":"Polygon","coordinates":[[[1,2],[3,4],[1,2]]]}');
            assert.equal(g.type, 'Polygon');
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.isNull(g.crs);
        });
        it('read MultiPoint with CRS', () => {
            const g = readJson('{"type":"MultiPoint","coordinates":[[1,2],[3,4]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, 'MultiPoint');
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read MultiPoint without CRS', () => {
            const g = readJson('{"type":"MultiPoint","coordinates":[[1,2],[3,4]]}');
            assert.equal(g.type, 'MultiPoint');
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.isNull(g.crs);
        });
        it('read MultiLine with CRS', () => {
            const g = readJson('{"type":"MultiLineString","coordinates":[[[1,2],[3,4],[1,2]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, 'MultiLineString');
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read MultiLine without CRS', () => {
            const g = readJson('{"type":"MultiLineString","coordinates":[[[1,2],[3,4],[1,2]]]}');
            assert.equal(g.type, 'MultiLineString');
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.isNull(g.crs);
        });
        it('read MultiPolygon with CRS', () => {
            const g = readJson('{"type":"MultiPolygon","coordinates":[[[[1,2],[3,4],[1,2]]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, 'MultiPolygon');
            assert.deepEqual(g.coordinates, [[[[1,2],[3,4],[1,2]]]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read MultiPolygon without CRS', () => {
            const g = readJson('{"type":"MultiPolygon","coordinates":[[[[1,2],[3,4],[1,2]]]]}');
            assert.equal(g.type, 'MultiPolygon');
            assert.deepEqual(g.coordinates, [[[[1,2],[3,4],[1,2]]]]);
            assert.isNull(g.crs);
        });
    });
});

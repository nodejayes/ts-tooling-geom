const {assert} = require('chai');
const {describe, it} = require('mocha');
const {readJson} = require('./reader');
const {GeometryTypes} = require('../../definitions/geometry.types');

describe('JSON io Tests', () => {
    describe('[Method]: readJson', () => {
        it('read Point with CRS', () => {
            const g = readJson('{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, GeometryTypes.point);
            assert.deepEqual(g.coordinates, [1,2]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read Point without CRS', () => {
            const g = readJson('{"type":"Point","coordinates":[1,2]}');
            assert.equal(g.type, GeometryTypes.point);
            assert.deepEqual(g.coordinates, [1,2]);
            assert.isNull(g.crs);
        });
        it('read Line with CRS', () => {
            const g = readJson('{"type":"LineString","coordinates":[[1,2],[3,4]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, GeometryTypes.line);
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read Line without CRS', () => {
            const g = readJson('{"type":"LineString","coordinates":[[1,2],[3,4]]}');
            assert.equal(g.type, GeometryTypes.line);
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.isNull(g.crs);
        });
        it('read Polygon with CRS', () => {
            const g = readJson('{"type":"Polygon","coordinates":[[[1,2],[3,4],[1,2]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, GeometryTypes.polygon);
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read Polygon without CRS', () => {
            const g = readJson('{"type":"Polygon","coordinates":[[[1,2],[3,4],[1,2]]]}');
            assert.equal(g.type, GeometryTypes.polygon);
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.isNull(g.crs);
        });
        it('read MultiPoint with CRS', () => {
            const g = readJson('{"type":"MultiPoint","coordinates":[[1,2],[3,4]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, GeometryTypes.multiPoint);
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read MultiPoint without CRS', () => {
            const g = readJson('{"type":"MultiPoint","coordinates":[[1,2],[3,4]]}');
            assert.equal(g.type, GeometryTypes.multiPoint);
            assert.deepEqual(g.coordinates, [[1,2],[3,4]]);
            assert.isNull(g.crs);
        });
        it('read MultiLine with CRS', () => {
            const g = readJson('{"type":"MultiLineString","coordinates":[[[1,2],[3,4],[1,2]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, GeometryTypes.multiLine);
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read MultiLine without CRS', () => {
            const g = readJson('{"type":"MultiLineString","coordinates":[[[1,2],[3,4],[1,2]]]}');
            assert.equal(g.type, GeometryTypes.multiLine);
            assert.deepEqual(g.coordinates, [[[1,2],[3,4],[1,2]]]);
            assert.isNull(g.crs);
        });
        it('read MultiPolygon with CRS', () => {
            const g = readJson('{"type":"MultiPolygon","coordinates":[[[[1,2],[3,4],[1,2]]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
            assert.equal(g.type, GeometryTypes.multiPolygon);
            assert.deepEqual(g.coordinates, [[[[1,2],[3,4],[1,2]]]]);
            assert.equal(g.crs.srId, 4326);
        });
        it('read MultiPolygon without CRS', () => {
            const g = readJson('{"type":"MultiPolygon","coordinates":[[[[1,2],[3,4],[1,2]]]]}');
            assert.equal(g.type, GeometryTypes.multiPolygon);
            assert.deepEqual(g.coordinates, [[[[1,2],[3,4],[1,2]]]]);
            assert.isNull(g.crs);
        });
        it('read Feature without CRS and Properties', () => {
            let f = readJson('{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2]},"properties":null}');
            assert.equal(f.type, GeometryTypes.feature);
            assert.equal(f.geometry.type, GeometryTypes.point);
            assert.isUndefined(f.geometry.crs);
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.isNull(f.properties);
            f = readJson('{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2]}}');
            assert.equal(f.type, GeometryTypes.feature);
            assert.equal(f.geometry.type, GeometryTypes.point);
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.isUndefined(f.geometry.crs);
            assert.isNull(f.properties);
        });
        it('read Feature with CRS without Properties', () => {
            let f = readJson('{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":null}');
            assert.equal(f.type, GeometryTypes.feature);
            assert.equal(f.geometry.type, GeometryTypes.point);
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.equal(f.geometry.crs.type, 'name');
            assert.equal(f.geometry.crs.properties.name, 'EPSG:4326');
            assert.isNull(f.properties);
        });
        it('read Feature without CRS with Properties', () => {
            let f = readJson('{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2]},"properties":{"hello": "world"}}');
            assert.equal(f.type, GeometryTypes.feature);
            assert.equal(f.geometry.type, GeometryTypes.point);
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.isUndefined(f.geometry.crs);
            assert.equal(f.properties.hello, 'world');
        });
        it('read Feature with CRS with Properties', () => {
            let f = readJson('{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}}');
            assert.equal(f.type, GeometryTypes.feature);
            assert.equal(f.geometry.type, GeometryTypes.point);
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.equal(f.geometry.crs.type, 'name');
            assert.equal(f.geometry.crs.properties.name, 'EPSG:4326');
            assert.equal(f.properties.hello, 'world');
        });
        it('read FeatureCollection', () => {
            const fc = readJson('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}}]}');
            assert.equal(fc.type, GeometryTypes.featureCollection);
            assert.equal(fc.features.length, 2);
            for (const f of fc.features) {
                assert.equal(f.type, GeometryTypes.feature);
                assert.equal(f.geometry.type, GeometryTypes.point);
                assert.deepEqual(f.geometry.coordinates, [1,2]);
                assert.equal(f.geometry.crs.type, 'name');
                assert.equal(f.geometry.crs.properties.name, 'EPSG:4326');
                assert.equal(f.properties.hello, 'world');
            }
        });
    });
});

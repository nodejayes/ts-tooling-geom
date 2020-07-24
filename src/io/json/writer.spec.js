const {assert} = require('chai');
const {describe, it} = require('mocha');
const {ReferenceSystem} = require('../../reference_system/reference.system');
const {Point} = require('../../geometry/point');
const {Line} = require('../../geometry/line');
const {Polygon} = require('../../geometry/polygon');
const {MultiPoint} = require('../../geometry/multi.point');
const {MultiLine} = require('../../geometry/multi.line');
const {MultiPolygon} = require('../../geometry/multi.polygon');
const {Feature} = require('../../geometry/feature');
const {FeatureCollection} = require('../../geometry/feature.collection');
const {writeJson} = require('./writer');

describe('JSON io Tests', () => {
    describe('[Method]: readJson', () => {
        it('write Point with CRS', () => {
            const p = new Point([1,2], new ReferenceSystem(4326));
            assert.equal(writeJson(p), '{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
        });
        it('write Point without CRS', () => {
            const p = new Point([1,2]);
            assert.equal(writeJson(p), '{"type":"Point","coordinates":[1,2]}');
        });
        it('write Line with CRS', () => {
            const l = new Line([[1,2],[3,4]], new ReferenceSystem(4326));
            assert.equal(writeJson(l), '{"type":"LineString","coordinates":[[1,2],[3,4]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
        });
        it('write Line without CRS', () => {
            const l = new Line([[1,2],[3,4]]);
            assert.equal(writeJson(l), '{"type":"LineString","coordinates":[[1,2],[3,4]]}');
        });
        it('write Polygon with CRS', () => {
            const p = new Polygon([[[1,2],[3,4],[1,2]]], new ReferenceSystem(4326));
            assert.equal(writeJson(p), '{"type":"Polygon","coordinates":[[[1,2],[3,4],[1,2]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
        });
        it('write Polygon without CRS', () => {
            const p = new Polygon([[[1,2],[3,4],[1,2]]]);
            assert.equal(writeJson(p), '{"type":"Polygon","coordinates":[[[1,2],[3,4],[1,2]]]}');
        });
        it('write MultiPoint with CRS', () => {
            const mp = new MultiPoint([[1,2],[3,4]], new ReferenceSystem(4326));
            assert.equal(writeJson(mp), '{"type":"MultiPoint","coordinates":[[1,2],[3,4]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
        });
        it('write MultiPoint without CRS', () => {
            const mp = new MultiPoint([[1,2],[3,4]]);
            assert.equal(writeJson(mp), '{"type":"MultiPoint","coordinates":[[1,2],[3,4]]}');
        });
        it('write MultiLine with CRS', () => {
            const ml = new MultiLine([[[1,2],[3,4],[1,2]]], new ReferenceSystem(4326));
            assert.equal(writeJson(ml), '{"type":"MultiLineString","coordinates":[[[1,2],[3,4],[1,2]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
        });
        it('write MultiLine without CRS', () => {
            const ml = new MultiLine([[[1,2],[3,4],[1,2]]]);
            assert.equal(writeJson(ml), '{"type":"MultiLineString","coordinates":[[[1,2],[3,4],[1,2]]]}');
        });
        it('write MultiPolygon with CRS', () => {
            const mp = new MultiPolygon([[[[1,2],[3,4],[1,2]]]], new ReferenceSystem(4326));
            assert.equal(writeJson(mp), '{"type":"MultiPolygon","coordinates":[[[[1,2],[3,4],[1,2]]]],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}');
        });
        it('write MultiPolygon without CRS', () => {
            const mp = new MultiPolygon([[[[1,2],[3,4],[1,2]]]]);
            assert.equal(writeJson(mp), '{"type":"MultiPolygon","coordinates":[[[[1,2],[3,4],[1,2]]]]}');
        });
        it('write Feature without CRS without Properties', () => {
            const f = new Feature(new Point([1,2]));
            assert.equal(writeJson(f), '{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2]},"properties":null}');
        });
        it('write Feature with CRS without Properties', () => {
            const f = new Feature(new Point([1,2], new ReferenceSystem(4326)));
            assert.equal(writeJson(f), '{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":null}');
        });
        it('write Feature without CRS with Properties', () => {
            const f = new Feature(new Point([1,2]), {hello:'world'});
            assert.equal(writeJson(f), '{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2]},"properties":{"hello":"world"}}');
        });
        it('write Feature with CRS with Properties', () => {
            const f = new Feature(new Point([1,2], new ReferenceSystem(4326)), {hello:'world'});
            assert.equal(writeJson(f), '{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}}');
        });
        it('write FeatureCollection', () => {
            const f1 = new Feature(new Point([1,2], new ReferenceSystem(4326)), {hello:'world'});
            const f2 = new Feature(new Point([1,2], new ReferenceSystem(4326)), {hello:'world'});
            const fc = new FeatureCollection([f1, f2]);
            assert.equal(writeJson(fc), '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[1,2],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}}]}');
        });
    });
});

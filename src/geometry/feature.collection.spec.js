const {Feature} = require('./feature');
const {FeatureCollection} = require('./feature.collection');
const {Point} = require('./point');
const {ReferenceSystem} = require('../reference_system/reference.system');

const {assert} = require('chai');
const {describe, it} = require('mocha');

describe('FeatureCollection Tests', () => {
    describe('[Method]: constructor', () => {
        it('create new FeatureCollection', () => {
            const f1 = new Feature(new Point([1,2], new ReferenceSystem(4326)), {Hello: 'World'});
            const f2 = new Feature(new Point([4,5], new ReferenceSystem(4326)));
            const fc = new FeatureCollection([f1, f2]);
            assert.equal(fc.type, 'FeatureCollection');
            assert.equal(fc.features.length, 2);
        });
    });
    describe('[Method]: transform', () => {
        it('transform wgs84 to PseudoMercator', () => {
            const f = new Feature(new Point([1,2], new ReferenceSystem(4326)), {Hello: 'World'});
            const fc = new FeatureCollection([f]);
            fc.transform(new ReferenceSystem(3857));
            assert.deepEqual(fc.features[0].geometry.coordinates, [111319.49079327357, 222684.20850554455]);
            assert.equal(fc.features[0].geometry.crs.srId, 3857);
        });
    });
});

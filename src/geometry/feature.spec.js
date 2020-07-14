const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Feature} = require('./feature');
const {Point} = require('./point');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('Feature Tests', () => {
    describe('[Method]: constructor', () => {
        it('create new Feature', () => {
            const f = new Feature(new Point([1,2], new ReferenceSystem(4326)), {Hello: 'World'});
            assert.equal(f.type, 'Feature');
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.equal(f.geometry.crs.srId, 4326);
            assert.equal(f.properties.Hello, 'World');
        });
        it('create new Feature without properties', () => {
            const f = new Feature(new Point([1,2], new ReferenceSystem(4326)));
            assert.equal(f.type, 'Feature');
            assert.deepEqual(f.geometry.coordinates, [1,2]);
            assert.equal(f.geometry.crs.srId, 4326);
            assert.isNull(f.properties);
        });
    });
    describe('[Method]: transform', () => {
        it('transform wgs84 to PseudoMercator', () => {
            const f = new Feature(new Point([1,2], new ReferenceSystem(4326)), {Hello: 'World'});
            f.transform(new ReferenceSystem(3857));
            assert.deepEqual(f.geometry.coordinates, [111319.49079327357, 222684.20850554455]);
            assert.equal(f.geometry.crs.srId, 3857);
        });
    });
});

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
    describe('[Method]: transform', () => {
       it('transform point from wgs84 to PseudoMercator', () => {
           const p = new Point([1,2], new ReferenceSystem(4326));
           p.transform(new ReferenceSystem(3857));
           assert.deepEqual(p.coordinates, [111319.49079327357, 222684.20850554455]);
           assert.equal(p.crs.srId, 3857);
       });
    });
});

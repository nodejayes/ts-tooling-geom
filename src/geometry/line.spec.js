const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Point} = require('./point');
const {Line} = require('./line');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('Line Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create with SrId', () => {
            const p = new Line([
                [1,2], [3,4]
            ], new ReferenceSystem(4326));
            assert.equal(p.type, 'LineString');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can create without SrId', () => {
            const p = new Line([
                [1,2], [3,4]
            ]);
            assert.equal(p.type, 'LineString');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.isNull(p.crs);
        });
        it('can create from point array', () => {
            const p1 = new Point([1,2], new ReferenceSystem(4326));
            const p2 = new Point([3,4], new ReferenceSystem(4326));
            const p = new Line([p1, p2], new ReferenceSystem(4326));
            assert.equal(p.type, 'LineString');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can detect reference system', () => {
            const p1 = new Point([1,2], new ReferenceSystem(4326));
            const p2 = new Point([3,4], new ReferenceSystem(4326));
            const p = new Line([p1, p2]);
            assert.equal(p.type, 'LineString');
            assert.deepEqual(p.coordinates, [
                [1,2], [3,4]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
    });
    describe('[Method]: transform', () => {
        it('transform from wgs84 to PseudoMercator', () => {
            const l = new Line([[1,2], [3,4]], new ReferenceSystem(4326));
            l.transform(new ReferenceSystem(3857));
            assert.deepEqual(l.coordinates, [[111319.49079327357, 222684.20850554455], [333958.4723798207, 445640.1096560266]]);
            assert.equal(l.crs.srId, 3857);
        });
    });
});

const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Line} = require('./line');
const {Polygon} = require('./polygon');
const {ReferenceSystem} = require('../reference_system/reference.system');

describe('Polygon Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create with SrId', () => {
            const p = new Polygon([
                [[1,2], [3,4], [5,6], [1,2]]
            ], new ReferenceSystem(4326));
            assert.equal(p.type, 'Polygon');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4], [5,6], [1,2]]
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can create without SrId', () => {
            const p = new Polygon([
                [[1,2], [3,4], [5,6], [1,2]]
            ]);
            assert.equal(p.type, 'Polygon');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4], [5,6], [1,2]]
            ]);
            assert.isNull(p.crs);
        });
        it('can create from point array', () => {
            const p1 = new Line([[1,2], [3,4], [5,6], [1,2]], new ReferenceSystem(4326));
            const p2 = new Line([[10,20], [30,40], [50,60], [10,20]], new ReferenceSystem(4326));
            const p = new Polygon([p1, p2], new ReferenceSystem(4326));
            assert.equal(p.type, 'Polygon');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4], [5,6], [1,2]],
                [[10,20], [30,40], [50,60], [10,20]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
        it('can detect reference system', () => {
            const p1 = new Line([[1,2], [3,4], [5,6], [1,2]], new ReferenceSystem(4326));
            const p2 = new Line([[10,20], [30,40], [50,60], [10,20]], new ReferenceSystem(4326));
            const p = new Polygon([p1, p2]);
            assert.equal(p.type, 'Polygon');
            assert.deepEqual(p.coordinates, [
                [[1,2], [3,4], [5,6], [1,2]],
                [[10,20], [30,40], [50,60], [10,20]],
            ]);
            assert.equal(p.crs.properties.name, 'EPSG:4326');
        });
    });
    describe('[Method]: transform', () => {
        it('transform polygon wgs84 to PseudoMercator', () => {
            const p = new Polygon([
                [[1,2], [3,4], [5,6], [1,2]]
            ], new ReferenceSystem(4326));
            p.transform(new ReferenceSystem(3857));
            assert.deepEqual(p.coordinates, [
                [
                    [111319.49079327357, 222684.20850554455],
                    [333958.4723798207, 445640.1096560266],
                    [556597.4539663679, 669141.0570442454],
                    [111319.49079327357, 222684.20850554455],
                ],
            ]);
            assert.equal(p.crs.srId, 3857);
        });
    });
});

const {assert} = require('chai');
const {describe, it} = require('mocha');
const {getEpsg, register, reproject} = require('./transform');

describe('Coordinate Projection Tests', () => {
    describe('[Method]: getEPSG', () => {
        it('has default WGS84', () => {
            assert.equal(getEpsg(4326), '+proj=longlat +datum=WGS84 +no_defs');
        });
        it('has default PseudoMercator', () => {
            assert.equal(getEpsg(3857), '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs');
        });
    });
    describe('[Method]: register', () => {
        it('can register another Projections', () => {
            register(3875, '+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=21500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
            assert.equal(getEpsg(3875), '+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=21500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        });
    });
    describe('[Method]: reproject', () => {
        it('WGS84 reprojection', () => {
            assert.deepEqual(reproject(getEpsg(3857), getEpsg(4326),
                [[1349576.948574657, 6643160.782075817]]),
                [[12.123456, 51.123456]]);
        });
        it('PseudoMercator reprojection', () => {
            assert.deepEqual(reproject(getEpsg(4326), getEpsg(3857),
                [[12.123456, 51.123456]]),
                [[1349576.948574657, 6643160.782075817]]);
        });
    });
});

const {assert} = require('chai');
const {describe, it} = require('mocha');
const {ReferenceSystem} = require('./reference.system');

describe('Reference System Tests', () => {
    describe('[Method]: constructor', () => {
        it('can create by SrId', () => {
            const rs = new ReferenceSystem(4326);
            assert.equal(rs.type, 'name');
            assert.equal(rs.properties.name, 'EPSG:4326');
        });
    });
});

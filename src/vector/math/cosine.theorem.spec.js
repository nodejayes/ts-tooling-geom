const {assert} = require('chai');
const {describe, it} = require('mocha');
const {cosineTheorem} = require('./cosine.theorem');

describe('Cosine Theorem Tests', () => {
    it('in Radiant', () => {
        assert.equal(cosineTheorem(5.0990195135927845, 3.605551275463989, 2.23606797749979), 2.089942441041419);
    });
    it('in Degrees', () => {
        assert.equal(cosineTheorem(5.0990195135927845, 3.605551275463989, 2.23606797749979, true), 119.74488231457212);
    });
});

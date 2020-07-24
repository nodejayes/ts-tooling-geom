const {assert} = require('chai');
const {describe, it} = require('mocha');
const {pythagoras, pythagorasLength} = require('./pythagoras');

describe('Pythagoras Tests', () => {
    describe('[Method]: pythagoras', () => {
        it('example', () => {
            assert.equal(pythagoras(1,2,3,4), 2.8284271247461903);
        });
    });
    describe('[Method]: pythagorasLength', () => {
        assert.equal(pythagorasLength(1, 2), 2.23606797749979);
    });
});

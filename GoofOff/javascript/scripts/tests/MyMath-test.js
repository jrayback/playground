var chai = require('chai');
var assert = chai.assert;
var fib = require('../recursion.js');

describe('fibonacci2', function(){
    it('should return array of first two fibonacci numbers', function(){
        assert.deepEqual(fib(2),[0,1]);
    });
});
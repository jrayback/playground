const chai = require('chai')
const assert = chai.assert
const MyMath = require('../MyMath')

describe('FIBONACCI TESTS', function(){
    let myMath = undefined;

    before(function(){
        myMath = new MyMath();
    });
    
    it('Should return empty array if 0 is passed in', function(){
        let actual = myMath.fib(0);
        let expected = [];
        assert.deepEqual(actual,expected);
    });

    it('Should return and array with 0 in it if 1 is passed in', function(){
        let actual = myMath.fib(1);
        let expected = [0];
        assert.deepEqual(actual,expected);
    });

    it('Should return array of first two fibonacci numbers if 2 is passed in', function(){
        let actual = myMath.fib(2);
        let expected = [0,1];
        assert.deepEqual(actual,expected);
    });

    it('Should return array of first three fibonacci numbers if 3 is passed in', function(){
        let actual = myMath.fib(3);
        let expected = [0,1,2];
        assert.deepEqual(actual,expected);
    });

    it('Should return array of first five fibonacci numbers if 5 is passed in', function(){
        let actual = myMath.fib(5);
        let expected = [0,1,2,3,5];
        assert.deepEqual(actual,expected);
    });

    it('Should return empty array if nothing is passed in', function(){
        let actual = myMath.fib();
        let expected = [];
        assert.deepEqual(actual,expected);
    });
});


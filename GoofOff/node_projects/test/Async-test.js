// JUST TEST FILES TO TRY TO WORK WITH PROMISES
// NOTE: THIS TEST WILL TIME OUT IN mocha YOU NEED TO USE -t TO EXTEND TIMEOUT TO ~ 6000 ms
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const assert = chai.assert
const helloWorld = require('../Async.js')

describe('BLUEBIRD PROMISE TESTS', function () {
  it('bogus test', function () {
    let expected = true
    assert.isTrue(expected)
  })
  it('Should return the correct string', function () {
    let expected = 'Hello World! My name is Jonathan. My job is software developer.'
    return assert.eventually.equal(Promise.resolve(helloWorld()), expected)
  })
})

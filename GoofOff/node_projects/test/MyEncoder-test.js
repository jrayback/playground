const chai = require('chai')
const assert = chai.assert
const MyEncoder = require('../MyEncoder')

describe('ENCODING TESTS', () => {
  let myEncoder

  before(() => {
    myEncoder = new MyEncoder()
  })

  it('Should return 0 if a is passed in', () => {
    let actual = myEncoder.encode('a')
    let expected = '0'
    assert.equal(actual, expected)
  })
  it('Should return 00 if aa is passed in', () => {
    let actual = myEncoder.encode('aa')
    let expected = '00'
    assert.equal(actual, expected)
  })
  it('Should return 00 if aA is passed in', () => {
    let actual = myEncoder.encode('aA')
    let expected = '00'
    assert.equal(actual, expected)
  })
  it('Should return 01 if ab is passed in', () => {
    let actual = myEncoder.encode('ab')
    let expected = '01'
    assert.equal(actual, expected)
  })
  it('Should return 0121393 if az is passed in', () => {
    let actual = myEncoder.encode('az')
    let expected = '0121393'
    assert.equal(actual, expected)
  })
  it('Should handle error if non-alpha characters are passed in', () => {
    // need to use Function.prototype.bind() here to create a copy of my function to pass into the doesNotThrow() method
    assert.doesNotThrow(myEncoder.encode.bind(myEncoder, 'a1$-~'))
  })
  it('Should ignore spaces', () => {
    let actual = myEncoder.encode('a a')
    let expected = '00'
    assert.equal(actual, expected)
  })
})

describe('DECODING TESTS', () => {
  let myEncoder

  before(() => {
    myEncoder = new MyEncoder()
  })

  it('Should return a if 0 is passed in', () => {
    let actual = myEncoder.decode('0')
    let expected = 'a'
    assert.equal(actual, expected)
  })
  it('Should return aa if 00 is passed in', () => {
    let actual = myEncoder.decode('00')
    let expected = 'aa'
    assert.equal(actual, expected)
  })
  it('Should return az if 0121393 is passed in', () => {
    let actual = myEncoder.decode('0121393')
    let expected = 'az'
    assert.equal(actual, expected)
  })
  it('Should return ambcdzbcdbcm if 023312312139312312233 is passed in', () => {
    let actual = myEncoder.decode('023312312139312312233')
    let expected = 'ambcdzbcdbcm'
    assert.equal(actual, expected)
  })
})

describe('PARSING TESTS', () => {
  let myEncoder

  before(() => {
    myEncoder = new MyEncoder()
  })

  it('Should return [0, 121393, 2584, 0] if 012139325840 is passed in', () => {
    let actual = myEncoder._parseKeys('012139325840', 6)
    let expected = ['0', '121393', '2584', '0']
    assert.deepEqual(actual, expected)
  })
})

/*
[ 0, a
  1, b
  2, c
  3, d
  5, e
  8, f
  13, g
  21, h
  34, i
  55, j
  89, k
  144, l
  233, m
  377, n
  610, o
  987, p
  1597, q
  2584, r
  4181, s
  6765, t
  10946, u
  17711, v
  28657, w
  46368, x
  75025, y
  121393 z]
*/

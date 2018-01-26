const MyMath = require('./MyMath')

class MyEncoder {
  constructor () {
    this.math = new MyMath()
    this.fibValues = this.math.fib(26) // 26 is magic number...resolve this
    this.fibChars = generateCharsFromInts(this.fibValues) // put in ctor? duplicated above
  }
  encode (message) {
    let encodedMessage = ''
    let lowerMsg
    try {
      // Try to make lower case, but if it's not an alphabetical character, it handles the error and does nothing
      lowerMsg = message.toLowerCase()
    } catch (e) {
      console.log('Message must be alphabetical characters only.')
      return encodedMessage
    }
    // strip out any spaces
    let noSpaces = lowerMsg.replace(/\s/g, '')
    // make an array of the lowercase characters
    let lowerCases = Array.from(noSpaces)
    // the array we use to get indexes mapping letters into our coding series
    let indexes = Array.from('abcdefghijklmnopqrstuvwxyz')
    // Encoder function uses Fibonacci for now
    let substitutes = this.math.fib(26) // 26 is magic number, where to put?
    for (let char of lowerCases) {
      let i = indexes.indexOf(char)
      encodedMessage += substitutes[i]
    }
    return encodedMessage
  }
  decode (message) {
    let decodedMessage = ''
    let letters = Array.from('abcdefghijklmnopqrstuvwxyz')
    let codes = this.fibChars
    let keys = this._parseKeys(message, 6) // 6 is magic number, where to put it?
    for (let key of keys) {
      let i = codes.indexOf(key)
      decodedMessage += letters[i]
    }
    return decodedMessage
  }
  // I NEED TO BREAK THIS OUT INTO A SEPARATE PARSING STATIC CLASS WITH A parseFib() FUNCTION THEN SET THIS INSTANCE
  // OF THE DECODER TO USE THE FIB PARSER
  _parseKeys (message, maxKeyLength) {
    let keys = []
    let codes = this.fibChars
    let beginIndex = 0
    let endIndex = message.length >= maxKeyLength ? maxKeyLength : message.length
    while (endIndex <= message.length && beginIndex !== endIndex) {
      let tryThis = message.slice(beginIndex, endIndex)
      while (codes.indexOf(tryThis) === -1) {
        tryThis = message.slice(beginIndex, --endIndex)
      }
      keys.push(tryThis)
      beginIndex = endIndex
      endIndex = message.length >= (endIndex + maxKeyLength) ? (endIndex + maxKeyLength) : message.length
    }
    return keys
  }
};

function generateCharsFromInts (intArray) {
  let fibChars = []
  for (let i of intArray) {
    fibChars.push(i.toString())
  }
  return fibChars
}
module.exports = MyEncoder

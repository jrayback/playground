const MyMath = require('./MyMath')

function generateCharsFromInts (intArray) {
  let fibChars = []
  for (let i of intArray) {
    fibChars.push(i.toString())
  }
  return fibChars
}

// Ultimately I could abstract this class to use different substitution ciphers
class FibEncoder {
  constructor () {
    this.math = new MyMath()
    this.plainUnits = Array.from('abcdefghijklmnopqrstuvwxyz')
    this.cipherUnits = generateCharsFromInts(this.math.fib(26)) // 26 is magic number...also we're tightly coupled to fibonacci
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
    for (let char of lowerCases) {
      let i = this.plainUnits.indexOf(char)
      encodedMessage += this.cipherUnits[i]
    }
    return encodedMessage
  }
  decode (message) {
    let decodedMessage = ''
    let keys = this._parseKeys(message, 6) // 6 is magic number, where to put it?
    for (let key of keys) {
      let i = this.cipherUnits.indexOf(key)
      decodedMessage += this.plainUnits[i]
    }
    return decodedMessage
  }
  // I NEED TO BREAK THIS OUT INTO A SEPARATE PARSING STATIC CLASS WITH A parseFib() FUNCTION THEN SET THIS INSTANCE
  // OF THE DECODER TO USE THE FIB PARSER
  _parseKeys (message, maxKeyLength) {
    let keys = []
    let beginIndex = 0
    let endIndex = message.length >= maxKeyLength ? maxKeyLength : message.length
    while (endIndex <= message.length && beginIndex !== endIndex) {
      let tryThis = message.slice(beginIndex, endIndex)
      while (this.cipherUnits.indexOf(tryThis) === -1) {
        tryThis = message.slice(beginIndex, --endIndex)
      }
      keys.push(tryThis)
      beginIndex = endIndex
      endIndex = message.length >= (endIndex + maxKeyLength) ? (endIndex + maxKeyLength) : message.length
    }
    return keys
  }
};

module.exports = FibEncoder

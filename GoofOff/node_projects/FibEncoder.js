const MyMath = require('./MyMath')

// Helper function to turn array of ints into chars -- native JS way to do this?
function generateCharsFromInts (intArray) {
  let fibChars = []
  for (let i of intArray) {
    fibChars.push(i.toString())
  }
  return fibChars
}

// Holds the static parsing method
function MyParser () { }

MyParser.parseKeys = function (cipherText, cipherUnits, maxCipherUnitLength) {
  let keys = []
  let beginIndex = 0
  let endIndex = cipherText.length >= maxCipherUnitLength ? maxCipherUnitLength : cipherText.length
  while (endIndex <= cipherText.length && beginIndex !== endIndex) {
    let tryThis = cipherText.slice(beginIndex, endIndex)
    while (cipherUnits.indexOf(tryThis) === -1) {
      tryThis = cipherText.slice(beginIndex, --endIndex)
    }
    keys.push(tryThis)
    beginIndex = endIndex
    endIndex = cipherText.length >= (endIndex + maxCipherUnitLength) ? (endIndex + maxCipherUnitLength) : cipherText.length
  }
  return keys
}

// Ultimately I could abstract this class to take different substitution ciphers
class FibEncoder {
  constructor () {
    // This is couples to Fibonacci.
    this.math = new MyMath()
    this.plainUnits = Array.from('abcdefghijklmnopqrstuvwxyz')
    this.cipherUnits = generateCharsFromInts(this.math.fib(26)) // 26 is magic number...also we're tightly coupled to fibonacci
    // End coupling to Fibonacci...
  }
  encode (plainText) {
    let cipherText = ''
    let toLower
    try {
      // Try to make lower case, but if it's not an alphabetical character, it handles the error and does nothing
      toLower = plainText.toLowerCase()
    } catch (e) {
      console.log('Message must be alphabetical characters only.')
      return cipherText
    }
    // strip out any spaces
    let processedPlainText = toLower.replace(/\s/g, '')
    // make an array of the lowercase characters
    let processedPlainTextArray = Array.from(processedPlainText)
    for (let char of processedPlainTextArray) {
      let i = this.plainUnits.indexOf(char)
      cipherText += this.cipherUnits[i]
    }
    return cipherText
  }
  decode (cipherText) {
    let plainText = ''
    let keys = this._parseKeys(cipherText)
    for (let key of keys) {
      let i = this.cipherUnits.indexOf(key)
      plainText += this.plainUnits[i]
    }
    return plainText
  }
  _parseKeys (text) {
    // use the static parsing method, sending in specifics for this encode/decode scheme
    return MyParser.parseKeys(text, this.cipherUnits, 6) // 6 is a magic number, where to put it?
  }
};

module.exports = FibEncoder

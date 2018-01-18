const MyMath = require('./MyMath')

class MyEncoder {
  constructor () {
    this.math = new MyMath()
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
    let substitutes = this.math.fib(26)
    for (let char of lowerCases) {
      let i = indexes.indexOf(char)
      encodedMessage += substitutes[i]
    }
    return encodedMessage
  }
};

module.exports = MyEncoder

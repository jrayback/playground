// tests the Encoder class in the Node console
const FibEncoder = require('./FibEncoder')
let fibEncoder = new FibEncoder()
let message = 'Jonathan Rayback is the greatest man alive'
let cipherText = fibEncoder.encode(message)
let plainText = fibEncoder.decode(cipherText)
console.log(`${cipherText}

${plainText}`)

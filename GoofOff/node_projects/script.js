// tests the Encoder class in the Node console
const MyEncoder = require('./MyEncoder')
let myEncoder = new MyEncoder()
let message = 'Hey my name is Jonathan'
console.log(myEncoder.encode(message))

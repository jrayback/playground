// tests the Encoder class in the Node console
const MyEncoder = require('./MyEncoder')
let myEncoder = new MyEncoder()
let message = '0121393'
console.log(myEncoder.decode(message))

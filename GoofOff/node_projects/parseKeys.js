// TEST FILE. DOESN'T NEED TO BE KEPT

const MAX_KEY_LENGTH = 6
const MyMath = require('./MyMath')
const message = '023312312139312312'
// const message = '0'

// Should take a string, should return an array of valid keys
function parseKeys (message, maxKeyLength) {
  let keys = []
  let fib26 = generateFibChars()
  let beginIndex = 0
  let endIndex = message.length >= maxKeyLength ? maxKeyLength : message.length
  // console.log(fib26)
  console.log(`beginIndex = ${beginIndex}`)
  console.log(`endIndex = ${endIndex}`)
  console.log(message)
  // if there is still message left to parse...
  while (endIndex <= message.length && beginIndex !== endIndex) {
    let tryThis = message.slice(beginIndex, endIndex)
    console.log(tryThis)
    // take the chunk and keep cutting it down until a match is found...
    while (fib26.indexOf(tryThis) === -1) {
      tryThis = message.slice(beginIndex, --endIndex)
      console.log(tryThis)
    }
    keys.push(tryThis)
    beginIndex = endIndex
    endIndex = message.length >= (endIndex + maxKeyLength) ? (endIndex + maxKeyLength) : message.length
    console.log(`beginIndex = ${beginIndex}`)
    console.log(`endIndex = ${endIndex}`)
  }
  return keys
}

let keys = parseKeys(message, MAX_KEY_LENGTH)

console.log(keys)

function generateFibChars () {
  let myMath = new MyMath()
  let fib26 = myMath.fib(26)
  let fibChars = []
  for (let n of fib26) {
    fibChars.push(n.toString())
  }
  return fibChars
}

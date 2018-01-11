class MyMath {
  // Non-Recursive Fibonacci
  // fib (places = 0) {
  //   let result = []
  //   let A = 0
  //   let B = 0
  //   let C = 0

  //   for (let i = 0; i < places; i++) {
  //     if (i === 1) {
  //       B = 1
  //     } else if (i === 2) {
  //       A = B
  //     } else {
  //       A = B
  //       B = C
  //     }
  //     C = A + B
  //     result.push(C)
  //   }
  //   return result
  // }

  // Recursive Fibonacci
  fib (places = 0, nextToLast = 0, last = 1, result = []) {
    // check to see if we're done recursing
    if (places !== 0) {
      // push the right value onto the result array
      if (nextToLast === 0) {
        result.push(nextToLast)
      } else {
        result.push(last)
      }
      // recurse until we've gone enough places
      this.fib(--places, last, (nextToLast + last), result)
    }

    // return the result
    return result
  }
};

module.exports = MyMath

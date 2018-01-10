// function fib(places, first = 0, second = 1, result = []){

//     // check to see if we're done recursing
//     if(places != 0){
        
//         // push the right value onto the result array
//         if(first === 0){
//             result.push(first);
//         } else {
//             result.push(second);
//         }

//         //recurse until we've gone enough places
//         fib(--places, second, (first + second), result);
//     }

//     // return the result
//     return result;
// }
function myFunc(first, {second, third, fourth}){
    console.log(`${first},
${second !== undefined ? second : 'nothing'}
${third !== undefined ? third : 'nada'}`)
}


let post = {
    name: "Jonathan",
    email: "jrayback@gmail.com"
};

post[Symbol.iterator] = function * () {
    let properties = Object.keys(this);
    for(let p of properties){
        yield this[p];
    }
};

let postValues = [...post];
console.log(postValues);
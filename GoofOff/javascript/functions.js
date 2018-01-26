// function myFunc(first, {second, third, fourth}){
//     console.log(`${first},
// ${second !== undefined ? second : 'nothing'}
// ${third !== undefined ? third : 'nada'}`)
// }


// let post = {
//     name: "Jonathan",
//     email: "jrayback@gmail.com"
// };

// post[Symbol.iterator] = function * () {
//     let properties = Object.keys(this);
//     for(let p of properties){
//         yield this[p];
//     }
// };

// let postValues = [...post];
// console.log(postValues);

let isArthur = true;
let isKing = true;

// isArthur && isKing ? function () {console.log("Hello King Arthur!")}() :
//                         function () {console.log("Hello Knight!")}()

class Armory {
    constructor(sword="Longsword"){
        this.addSword(sword);
    }
    addSword(sword) {
        this.swords = this.swords || []
        this.swords.push(sword);
    }
    printSwords(){
        for(let sword of this.swords) {
            console.log(sword)
        }
    }
}

class Knight {
    constructor(name, regiment){
        this.name = name;
        this.regiment = regiment;
        switch(regiment){
            case 1:
                this.weapon = "sword"
                break
            case 2:
                this.weapon = "knife"
                break
            default:
                this.weapon = "generic tool"
        }
    }
}

setUpStuff();

console.log(undefined || "" || 0)
console.log(42 && 34 && 87)

let knight = new Knight("Jonathan", 3)

console.log(`${knight.name} ${knight.weapon}`)

function setUpStuff() {
    let armory = new Armory();
    armory.addSword('Excalibur');
    armory.addSword('Vorpal Blade');
    armory.printSwords();
}

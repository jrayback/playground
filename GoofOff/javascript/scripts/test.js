// function closeThis(){
//     var x = 4;
//     return function(){
//         return x;
//     }
// }

// function attackFactory(weapon) {
//     var bonus = 0;
//     return function(name){
//         console.log(name + " attacks with a +" + (++bonus) + " " + weapon + "!");
//     };
// }

// var swordAttack = attackFactory("sword");
// var axeAttack = attackFactory("axe");
// var bowAttack = attackFactory("bow");
// var staffAttack = attackFactory("staff");

// swordAttack("Roger");
// axeAttack("Hagar");
// staffAttack("Gandalf");
// swordAttack("Fibian");

// var lighthouseRock = {
//     //gateClosed: true,
//     //weaponBulbs: superBlinders,
//     //capacity: 30,
//     //secretPassageTo: "Underwater Outpost",
//     numRangers: 3,
//     ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
//     ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
//     ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
//   };

//   console.log(lighthouseRock["ranger" + 1]["name"]);
//   console.log(lighthouseRock["ranger" + 1]["station"]);

// Footwear.prototype = {
//   alert: function() { 
//     console.log("Hello.");
//   }
// }

// function Footwear(){}

// var genericFootwear = new Footwear;
// genericFootwear.alert();

// function Shoe(size, color, gender, construct){
//   this.size = size;
//   this.color = color;
//   this.gender = gender;
//   this.construct = construct;
// }

// Shoe.prototype = {
//   putOn: function(){
//     console.log("OK " + this.gender + "!");
//   },
//   takeOff: function(){
//     console.log("Stinky " + this.construct + "!");
//   }
// }

// Shoe.prototype.valueOf = function(){
//   return this.size;
// }

// var beachShoe = new Shoe(6,"red", "woman", "sandal");

// beachShoe.takeOff();
// console.log(Object.prototype.isPrototypeOf(Shoe));
// console.log(Shoe.prototype.isPrototypeOf(beachShoe));

// var shoe = {
//   size: 6,
//   color: "blue",
//   gender: "men",
//   construct: "hemp",
//   takeOff: function(){
//     console.log("P.u. stinky " + this.construct + "!");
//   }
// };

// var magicShoe = Object.create(beachShoe);

// console.log(shoe);
// console.log(magicShoe);

// magicShoe.takeOff();

// console.log(shoe.isPrototypeOf(magicShoe));
// //console.log(shoe.prototype.isPrototypeOf(magicShoe));

// console.log(magicShoe.valueOf());

function write(string){
  console.log(string);
}

function loadProfiles(users = [], {uppercase, lowercase} = {}){
  let length = users.length;
  let i = 0;
  while(i < length){
    let message = users[i++];
    message = uppercase == true ? message.toUpperCase() : message;
    message = lowercase == true ? message.toLowerCase() : message;
    write(message);
  }
}

let users = ["Jonathan", "Geoffrey", "Rebekah", "Matthew"];

loadProfiles(users,{uppercase: true, lowercase: true});
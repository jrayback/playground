// function closeThis(){
//     var x = 4;
//     return function(){
//         return x;
//     }
// }

function attackFactory(weapon) {
    var bonus = 0;
    return function(name){
        console.log(name + " attacks with a +" + (++bonus) + " " + weapon + "!");
    };
}

var swordAttack = attackFactory("sword");
var axeAttack = attackFactory("axe");
var bowAttack = attackFactory("bow");
var staffAttack = attackFactory("staff");

swordAttack("Roger");
axeAttack("Hagar");
staffAttack("Gandalf");
swordAttack("Fibian");
// var trainsOperational = 8;

// for(var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++){
//     console.log("Train #" + trainNumber + " is running.");
// }

// var userName;

// while(typeof userName != "string"){
//     while(typeof userName != "string" || !(confirm("Please confirm your name is " + userName))){
//         userName = prompt("Please enter your name:","");
//     }
// }

var eCount = function(){
    var phrase = prompt("Which prase would you like to examine?");
    if(typeof phrase != "string"){
        return false;
    } else {
        var eCount = 0;
        for(var i = 0; i < phrase.length; i++){
            if(phrase.charAt(i) == 'e' || phrase.charAt(i) == 'E'){
                eCount++;
            }
        }
        alert("There are " + eCount + " Es in \"" + phrase + "\".");
        return true;
    }
};

eCount();
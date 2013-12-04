/**
 * Pokemon Game
 * @author Wallace Wong
 */


//Introduction. Checks if player wants to play


while(true){

var readyAns = prompt("Are you ready to play the Game?").toUpperCase();

if (readyAns === "YES"||readyAns === "Y"){
    console.log("That's great you are going on an adventure");
    break;
}
else if (readyAns === "NO"||readyAns === "N"){
    console.log("What a pansy");
    break;
}
else {
    console.log("Come Again?");
}

}

//Game Code
var runGame = function(){
    alert("You are a Pokemon Master!");
};





//Command to Run Game
if(readyAns === "YES"||readyAns === "Y"){
    runGame();
}
    

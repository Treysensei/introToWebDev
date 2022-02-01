var numSides = prompt("how many sides does the die have?");
var dieAmmount = prompt("how many die are being thrown");

function rollDice(numSides){


    return Math.round(Math.random()*numSides);
 
}

for (var i =0; i < dieAmmount; i++){
    console.log(rollDice(6));
}

/**
 * @author Wallace Wong
 */
//Actual Fight Script




//Pokemons
var pikachu = new Object();
pikachu.name = "Pikachu";
pikachu.hp = "100";
pikachu.attack = "30";

var metapod = new Object();
metapod.name = "Metapod";
metapod.hp = "100";
metapod.attack = "10";

//Alert!
alert("A WILD METAPOD APPEARS!!!");


//Fighting Sequence;
var fighting = true;

var youHit = Math.floor(Math.random() * 2);
// var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;




while (fighting) {
  if (youHit) {
    alert("You hit " + metapod.name + " for" + pikachu.attack +" damage!");
    totalDamage += pikachu.attack;
    
    if (totalDamage >= metapod.hp) {
      alert("You did it! You killed Metapod!");
      fighting = false;
    } 
    else {
      alert("It is effective!");
      fighting = false;
    }
  } 
  else {
   alert("Metapod dodges!");
  }
}
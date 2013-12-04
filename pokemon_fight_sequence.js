/**
 * @author Wallace Wong
 */

// Define Pokemon class
var Pokemon = function (name, hp, attack) 
{
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  // See what the pokemon says.
  this.talk = function () {
    console.log(Array(4).join(name + " "));
  };
};

// Define Battle class
var Battle = function (pokemon1, pokemon2)
{
  this.pokemon1 = pokemon1;
  this.pokemon2 = pokemon2;
  // The fighting sequence for one round.
  // To fight another round, just call the function "fight" again to the object.
  this.fight = function () {
    var totalDamage = 0,
        randAttack = 0;

    console.log("A WILD " + this.pokemon2.name.toUpperCase() + " APPEARS!!!");

    // Did the pokemon escape or did you defeat it?
    while (totalDamage < this.pokemon2.hp) {
      // Randomizing your pokemone attack point from 0 to it's capable attacking hit point.
      randAttack = Math.round(Math.random() * this.pokemon1.attack);
      totalDamage += randAttack;
      if ( Math.floor(Math.random() * 2) && randAttack > 0 ) {
        console.log("You hit " + this.pokemon2.name + " for " + randAttack + " damage" + (randAttack > 1 ? "s" : "") + "!");
        if (totalDamage >= this.pokemon2.hp) {
          console.log("You did it! You killed " + this.pokemon2.name + "!");
          return false;
        } else {
          console.log("It is effective!");
        }
      } else {
        console.log(this.pokemon2.name + " dodges!");
        return false;
      }
    }
  };

};

// Create Pikachu
var pikachu = new Pokemon ("Pikachu", 100, 30);
// Create Metapod
var metapod = new Pokemon ("Metapod", 100, 30);

// Create the battle event
var battle1 = new Battle(pikachu, metapod);
// The battle begins
battle1.fight();



// //Actual Fight Script

// //Pokemons
// var pikachu = new Object();
// pikachu.name = "Pikachu";
// pikachu.hp = "100";
// pikachu.attack = "30";

// var metapod = new Object();
// metapod.name = "Metapod";
// metapod.hp = "100";
// metapod.attack = "10";

// //Alert!
// alert("A WILD METAPOD APPEARS!!!");


// //Fighting Sequence;
// var fighting = true;

// var youHit = Math.floor(Math.random() * 2);
// // var damageThisRound = Math.floor(Math.random() * 5 + 1);
// var totalDamage = 0;




// while (fighting) {
//   if (youHit) {
//     alert("You hit " + metapod.name + " for" + pikachu.attack +" damage!");
//     totalDamage += pikachu.attack;
    
//     if (totalDamage >= metapod.hp) {
//       alert("You did it! You killed Metapod!");
//       fighting = false;
//     } 
//     else {
//       alert("It is effective!");
//       fighting = false;
//     }
//   } 
//   else {
//    alert("Metapod dodges!");
//   }
// }
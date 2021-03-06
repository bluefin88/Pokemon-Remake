/**
 * @author Wallace Wong
 */

// Define Pokemon class
function Pokemon (name, details) {
  this.name = name;
  
  // provide default values to hp and attack if details is not set
  this.hp = 0;
  this.attack = 0;
  
  // loops through the details objects
  // if hp and or attack is set in the details object, the values will overwrite the default values from above
  for ( var detail in details ) {
    // creates/sets the Pokemon property from the details object equal to the value
    this[detail] = details[detail];
  }
};
Pokemon.prototype.talk = function () {
  console.log( Array(4).join(this.name + " ") );
};

// Define Battle class
var Battle = function (pokemon1, pokemon2)
{
  this.pokemon1 = pokemon1;
  this.pokemon2 = pokemon2;
};
// To fight another round, just call the function "fight" again to the object.
Battle.prototype.fight = function () 
{
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

// Create Pikachu
var pikachu = new Pokemon ("Pikachu", { hp: 100, attack: 30 });
// Create Metapod
var metapod = new Pokemon ("Metapod", { hp: 100, attack: 30 });

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
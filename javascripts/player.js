/*
  TODO: Modularize this code with IIFE or Browserify
 */
var RBDome = RBDome || {};
RBDome.Combatants = {};

/*
  Define the base object for any player of RBDome,
  whether a human player or a monster.
 */
RBDome.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 100);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
  this.stealth = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

RBDome.Combatants.Player.prototype.generateWeapon = function(newWeapon) {
  //this.weapon = newWeapon;

  var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

  // Get the string at the index
  var randomWeapon = this.allowedWeapons[random];

  // Composes the corresponding player class into the player object
  this.weapon = new RBDome.Armory[randomWeapon]();

  // Add the health bonus
  return this.weapon;
};

RBDome.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new RBDome.Stable[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a
  constructor function.
 */
RBDome.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Mage", "Shaman", "Wizard", "Conjurer", "Sorcerer", "Thief", "Ninja", "Assassin"];
  this.allowedWeapons = ["Dagger","BroadSword","WarAxe"]
};
RBDome.Combatants.Human.prototype = new RBDome.Combatants.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */
RBDome.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

RBDome.Combatants.Monster.prototype = new RBDome.Combatants.Player();

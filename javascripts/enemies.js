RBDome.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.allowedWeapons = ["Dagger","BroadSword","WarAxe"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new RBDome.GuildHall[randomClass]();
    return this.class;
  }
};

RBDome.Combatants.Orc.prototype = new RBDome.Combatants.Monster();

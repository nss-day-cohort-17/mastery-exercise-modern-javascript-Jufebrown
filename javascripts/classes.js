/*
  TODO: Modularize this code with IIFE or Browserify
 */
var RBDome = RBDome || {};
RBDome.Stable = {};

/*
  Base function for a player, or enemy, class (profession)
 */
RBDome.Stable.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.stealthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;
  this.stealthy = false;
  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
RBDome.Stable.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
RBDome.Stable.Fighter.prototype = new RBDome.Stable.PlayerClass();


RBDome.Stable.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
RBDome.Stable.Warrior.prototype = new RBDome.Stable.Fighter();


RBDome.Stable.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
RBDome.Stable.Valkyrie.prototype = new RBDome.Stable.Fighter();


RBDome.Stable.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
RBDome.Stable.Berserker.prototype = new RBDome.Stable.Fighter();


RBDome.Stable.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
RBDome.Stable.Monk.prototype = new RBDome.Stable.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
RBDome.Stable.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
RBDome.Stable.Mage.prototype = new RBDome.Stable.PlayerClass();


RBDome.Stable.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
RBDome.Stable.Shaman.prototype = new RBDome.Stable.Mage();


RBDome.Stable.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
RBDome.Stable.Wizard.prototype = new RBDome.Stable.Mage();


RBDome.Stable.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
RBDome.Stable.Conjurer.prototype = new RBDome.Stable.Mage();


RBDome.Stable.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
RBDome.Stable.Sorcerer.prototype = new RBDome.Stable.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
 RBDome.Stable.Stealth = function() {
  this.name = "Stealth";
  this.stealthy = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 20;
};
RBDome.Stable.Stealth.prototype = new RBDome.Stable.PlayerClass();

RBDome.Stable.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
};
RBDome.Stable.Thief.prototype = new RBDome.Stable.Stealth();

RBDome.Stable.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus + 20;
  this.stealthBonus = this.stealthBonus + 40;
};
RBDome.Stable.Ninja.prototype = new RBDome.Stable.Stealth();

RBDome.Stable.Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus + 0;
  this.strengthBonus = this.strengthBonus + 0;
  this.stealthBonus = this.stealthBonus + 20;
};
RBDome.Stable.Assassin.prototype = new RBDome.Stable.Stealth();

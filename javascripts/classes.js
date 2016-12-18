/*
  TODO: Modularize this code with IIFE or Browserify
 */
var RBDome = RBDome || {};
RBDome.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
RBDome.GuildHall.PlayerClass = function() {
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
RBDome.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
RBDome.GuildHall.Fighter.prototype = new RBDome.GuildHall.PlayerClass();


RBDome.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
RBDome.GuildHall.Warrior.prototype = new RBDome.GuildHall.Fighter();


RBDome.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
RBDome.GuildHall.Valkyrie.prototype = new RBDome.GuildHall.Fighter();


RBDome.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
RBDome.GuildHall.Berserker.prototype = new RBDome.GuildHall.Fighter();


RBDome.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
RBDome.GuildHall.Monk.prototype = new RBDome.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
RBDome.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
RBDome.GuildHall.Mage.prototype = new RBDome.GuildHall.PlayerClass();


RBDome.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
RBDome.GuildHall.Shaman.prototype = new RBDome.GuildHall.Mage();


RBDome.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
RBDome.GuildHall.Wizard.prototype = new RBDome.GuildHall.Mage();


RBDome.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
RBDome.GuildHall.Conjurer.prototype = new RBDome.GuildHall.Mage();


RBDome.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
RBDome.GuildHall.Sorcerer.prototype = new RBDome.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
 RBDome.GuildHall.Stealth = function() {
  this.name = "Stealth";
  this.stealthy = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 20;
};
RBDome.GuildHall.Stealth.prototype = new RBDome.GuildHall.PlayerClass();

RBDome.GuildHall.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
};
RBDome.GuildHall.Thief.prototype = new RBDome.GuildHall.Stealth();

RBDome.GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus + 20;
  this.stealthBonus = this.stealthBonus + 40;
};
RBDome.GuildHall.Ninja.prototype = new RBDome.GuildHall.Stealth();

RBDome.GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus + 0;
  this.strengthBonus = this.strengthBonus + 0;
  this.stealthBonus = this.stealthBonus + 20;
};
RBDome.GuildHall.Assassin.prototype = new RBDome.GuildHall.Stealth();

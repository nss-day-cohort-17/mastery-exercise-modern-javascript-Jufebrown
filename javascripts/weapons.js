var RBDome = RBDome || {};
RBDome.Armory = {};
 RBDome.Armory.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  //console.log(RBDome.Armory.Weapon)
  this.toString = function() {
    return this.name;
  }
};
//console.log(RBDome.Armory.Weapon)

RBDome.Armory.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};

RBDome.Armory.Dagger.prototype = new RBDome.Armory.Weapon();
//Dagger.prototype = new Weapon();

RBDome.Armory.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
RBDome.Armory.BroadSword.prototype = new RBDome.Armory.Weapon();
//BroadSword.prototype = new Weapon();

RBDome.Armory.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
RBDome.Armory.WarAxe.prototype = new RBDome.Armory.Weapon();
//WarAxe.prototype = new Weapon();

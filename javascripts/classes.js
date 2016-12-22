/*
  TODO: Modularize this code with IIFE or Browserify
 */
var RBDome = RBDome || {};
RBDome.Stable = {};

/*
  Base function for a player, or enemy, class (profession)
 */
RBDome.Stable.PlayerClass = function() {
  this.name = "Robot";
  this.aerial = false;
  this.toString = function() {
    return this.name;
  }
};

/*
Drone Types
  -Fixed-Wing
  -Rotor
*/
RBDome.Stable.Drone = function() {
  this.aerial = true;
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
RBDome.Stable.Drone.prototype = new RBDome.Stable.PlayerClass();


RBDome.Stable.FixedWing = function() {
  this.name = "FixedWing";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
RBDome.Stable.FixedWing.prototype = new RBDome.Stable.Drone();


RBDome.Stable.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
RBDome.Stable.Valkyrie.prototype = new RBDome.Stable.Drone();



/*
    Bipedal Types
      - Scout
      - Shock Troop
 */
RBDome.Stable.Bipedal = function() {
  this.name = "Bipedal";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
RBDome.Stable.Bipedal.prototype = new RBDome.Stable.PlayerClass();


RBDome.Stable.Scout = function() {
  this.name = "Scout";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
RBDome.Stable.Scout.prototype = new RBDome.Stable.Bipedal();


RBDome.Stable.ShockTroop = function() {
  this.name = "ShockTroop";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
RBDome.Stable.ShockTroop.prototype = new RBDome.Stable.Bipedal();



/*
    Tank Types
      - Main Battle Tank
      - IFV
 */
 RBDome.Stable.Tank = function() {
  this.name = "Tank";
  this.Tanky = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.TankBonus = this.TankBonus + 20;
};
RBDome.Stable.Tank.prototype = new RBDome.Stable.PlayerClass();

RBDome.Stable.MBT = function() {
  this.name = "MBT";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.TankBonus = this.TankBonus + 30;
};
RBDome.Stable.MBT.prototype = new RBDome.Stable.Tank();

RBDome.Stable.IFV = function() {
  this.name = "IFV";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus + 20;
  this.TankBonus = this.TankBonus + 40;
};
RBDome.Stable.IFV.prototype = new RBDome.Stable.Tank();

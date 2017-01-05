var RBDome = RBDome || {};
RBDome.Stable = {};

/*
  Base function for a player, or enemy
 */
RBDome.Stable.Robot = function() {
  this.name = "Robot";
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
};
RBDome.Stable.Drone.prototype = new RBDome.Stable.Robot();


RBDome.Stable.FixedWing = function() {
  this.name = "FixedWing";
  this.health = Math.floor((Math.random() * 50) + 200)
  this.damage = Math.floor((Math.random() * 50) + 200)
};
RBDome.Stable.FixedWing.prototype = new RBDome.Stable.Drone();


RBDome.Stable.Rotor = function() {
  this.name = "Rotor";
  this.health = Math.floor((Math.random() * 50) + 300)
  this.damage = Math.floor((Math.random() * 50) + 150)
};
RBDome.Stable.Rotor.prototype = new RBDome.Stable.Drone();



/*
    Bipedal Types
      - Scout
      - Shock Troop
 */
RBDome.Stable.Bipedal = function() {
  this.name = "Bipedal";
  this.maneuverable = true;
};
RBDome.Stable.Bipedal.prototype = new RBDome.Stable.Robot();


RBDome.Stable.Scout = function() {
  this.name = "Scout";
  this.health = Math.floor((Math.random() * 50) + 800)
  this.damage = Math.floor((Math.random() * 50) + 80)
};
RBDome.Stable.Scout.prototype = new RBDome.Stable.Bipedal();


RBDome.Stable.ShockTroop = function() {
  this.name = "ShockTroop";
  this.health = Math.floor((Math.random() * 50) + 1000)
  this.damage = Math.floor((Math.random() * 50) + 100)
};
RBDome.Stable.ShockTroop.prototype = new RBDome.Stable.Bipedal();



/*
    Tank Types
      - Main Battle Tank
      - IFV
 */
 RBDome.Stable.Tank = function() {
  this.name = "Tank";
  this.heavy = true;
};
RBDome.Stable.Tank.prototype = new RBDome.Stable.Robot();

RBDome.Stable.MBT = function() {
  this.name = "MBT";
  this.health = Math.floor((Math.random() * 50) + 2000)
  this.damage = Math.floor((Math.random() * 50) + 200)
};
RBDome.Stable.MBT.prototype = new RBDome.Stable.Tank();

RBDome.Stable.IFV = function() {
  this.name = "IFV";
  this.health = Math.floor((Math.random() * 50) + 1500)
  this.damage = Math.floor((Math.random() * 50) + 100)
};
RBDome.Stable.IFV.prototype = new RBDome.Stable.Tank();

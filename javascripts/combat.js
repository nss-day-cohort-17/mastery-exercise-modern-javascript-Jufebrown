var playerDamage = 0;
var enemyDamage = 0;
var playerTotalDamage = 0;
var enemyTotalDamage = 0;

function combat() {
  enemyHealth = enemyHealth - playerDamage;
  playerHealth = playerHealth - enemyDamage;
  combatValidation()
}

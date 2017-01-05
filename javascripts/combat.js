var player1Damage = 0;
var player2Damage = 0;

function combat() {
  player1Damage = currentPlayer1.class.damage
  player2Damage = currentPlayer2.class.damage
  player2Health = player2Health - player1Damage;
  player1Health = player1Health - player2Damage;
  combatValidation()
}

var currentPlayer1 = {};
var currentPlayer2 = {};
var player1Health = 0;
var player2Health = 0;
var bothNames = false;
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();


//Capture Player Name

function grabName() {
  if(($("#player1-name").val() !== "") && ($("#player2-name").val() !== "")) {
    currentPlayer1.name = $("#player1-name").val();
    currentPlayer2.name = $("#player2-name").val();
    bothNames = true;
  } else {
    $(".no-name").show();
  }
}


//Apply Class

function applyClass() {
  console.log();
  var player1Class = $(".1type").val()
  var player2Class = $(".2type").val()
  currentPlayer1.class = new RBDome.Stable[player1Class]
  currentPlayer2.class = new RBDome.Stable[player2Class]
}


function readyToRumble() {
  grabName()
  if (bothNames) {
    applyClass()
    loadCards()
    $(".card").hide();
    $(".card--battleground").show();
  }
}

//event listener for each class select
$("#battle").click(readyToRumble);



//Load Player and Enemy stats onto page -> function called by selecting defeat your enemies if all selections made

function loadCards() {
  player1Health = currentPlayer1.class.health
  player2Health = currentPlayer2.class.health
  //loads player name
  $(".playerName").text([currentPlayer1.name]);
  //loads player class
  $(".playerClass").text([currentPlayer1.class.name]);
  //loads player health
  $(".playerHealth").text([player1Health]);
  //loads enemy name
  $(".monsterName").text(currentPlayer2.name);
  //loads enemy class
  $(".monsterClass").text([currentPlayer2.class.name]);
  //loads enemy health
  $(".monsterHealth").text([player2Health]);
  $( ".playerCard" ).animate({right: "0"}, {
    duration: 1000
    });
  $( ".monsterCard" ).animate({left: "0"}, {
    duration: 1000
    });
}


//checks if battle should continue
function combatValidation(){
  if(player1Health > 0 && player2Health > 0){
    $(".playerHealth").text([player1Health]);
    $(".monsterHealth").text([player2Health]);
  }else if(player1Health > 0 && player2Health <= 0){
    $(".card").hide()
    alert("Player 1 wins!")
  }else if(player1Health <= 0 && player2Health > 0){
    $(".card").hide()
    alert("Player 2 wins!")
  }else if(player1Health <= 0 && player2Health <= 0){
    $(".card").hide()
    alert("You Tied!")
  }
}

function restart() {
  $(".card").hide();
  $("#player-setup").show();
}

//event listener for Attack button
$(".attack-btn").click(combat);

// event listener for restart
$(".again").click(restart)

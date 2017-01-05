var currentPlayer1 = {};
var currentPlayer2 = {};
var player1Health = 0;
var player2Health = 0;
var bothNames = false;
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  // $(".card__link").click(function(e) {
  //   var nextCard = "card--battleground";
  //   var moveAlong = false;

  //   switch (nextCard) {
  //     case "card--battleground":
  //       moveAlong = (currentPlayer1.name !== undefined);
  //       if (currentPlayer1.name === undefined) {
  //         $(".no-name").show();
  //       } else if (currentPlayer2.name === undefined) {
  //         $(".no-name").show();
  //       } else if (currentPlayer1.name === "") {
  //         $(".no-name").show();
  //       } else if (currentPlayer2.name === "") {
  //         $(".no-name").show();
  //       } else {
  //         loadCards();
  //       break;
  //     }
  //   }
  //   if (moveAlong) {
  //     $(".card").hide();
  //     $("." + nextCard).show();
  //   }
  // });


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
  var whichClass
  currentPlayer.class = new RBDome.Stable[whichClass];
}


function readyToRumble() {
  grabName()
}

//event listener for each class select
$("#battle").click(readyToRumble);



//Load Player and Enemy stats onto page -> function called by selecting defeat your enemies if all selections made

function loadCards() {
  // tabulates health based on random health and healthBonus
  playerHealth = currentPlayer.health + currentPlayer.class.healthBonus;
  enemyHealth = currentEnemy.health + currentEnemy.class.healthBonus;
  //loads player name
  $(".playerName").text([RBDome.Combatants.Player.prototype.name]);
  //loads player class
  $(".playerClass").text([currentPlayer.class.name]);
  //loads player weapon
  $(".playerWeapon").text([currentPlayer.weapon]);
  //loads player health
  $(".playerHealth").text([playerHealth]);
  //loads enemy name
  $(".monsterName").text("Orc");
  //loads enemy class
  $(".monsterClass").text([currentEnemy.class.name]);
  //loads enemy weapon
  $(".monsterWeapon").text([currentEnemy.weapon.name]);
  //loads enemy health
  $(".monsterHealth").text([enemyHealth]);
  $( ".playerCard" ).animate({right: "0"}, {
    duration: 1000
    });
  $( ".monsterCard" ).animate({left: "0"}, {
    duration: 1000
    });
}


//checks if battle should continue
function combatValidation(){
  if(playerHealth > 0 && enemyHealth > 0){
    $(".playerHealth").text([playerHealth]);
    $(".monsterHealth").text([enemyHealth]);
    //enemyHealth -= 70;
  }else if(playerHealth > 0 && enemyHealth <= 0){
    finaleCard();
    $("body").addClass("win-finale-card");
    $(".card").hide();
    $(".card--finale").show();
    $(".finale-card-win-header").show()
    console.log("you win")
  }else if(playerHealth <= 0 && enemyHealth > 0){
    finaleCard();
    $("body").addClass("lost-finale-card")
    $(".card").hide();
    $(".card--finale" ).show();
    $(".finale-card-lose-header").show()
    console.log("you lose")
  }else if(playerHealth <= 0 && enemyHealth <= 0){
    finaleCard();
    $("body").addClass("tie-finale-card")
    $(".card").hide();
    $(".card--finale").show();
    $(".finale-card-tie-header").show()
  }
}


//event listener for Attack button
$(".attack-btn").click(combat);

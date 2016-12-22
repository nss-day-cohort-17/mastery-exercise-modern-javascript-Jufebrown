var currentPlayer1 = {};
var currentPlayer2 = {};
var player1Health = 0;
var player2Health = 0;



$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--battleground":
        moveAlong = (currentPlayer.spell !== undefined);
        if (currentPlayer.spell === undefined) {
          $(".no-spell").show();}

        else if (currentPlayer.spell !== undefined) {
          loadCards();

        if (moveAlong) {
          addBonuses();

        }
        break;
      }
    }


    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }


  });



/*
    When any enter is hit,
    move on to the next view.
   */
  $("html").keypress(function(e) {
    if(e.keyCode === 13 ) {
      console.log("enter");
      if ($("#player-name").val() === "") {
            $(".no-name").show();
      } else if ($("#player-name").val() !== "") {
          grabName();
          classTips();
          $(".card--name").hide();
         $(".card--class").show();
      }
   }
  });


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});


//Capture Player Name

function grabName() {
  if($("#player-name").val() === "") {
    RBDome.Combatants.Player.prototype.name = "Unknown Adventurer";
  } else {
     RBDome.Combatants.Player.prototype.name = $("#player-name").val();
  }
}

//event listener for apply name
$("#select_class").click(grabName);



//Apply Class

var currentPlayer  = new RBDome.Combatants.Human();


function applyClass(e) {

  var whichClass = e.target.innerText.toLowerCase();
  var whichClassCase = whichClass[0].toUpperCase() + whichClass.slice(1);

  if (whichClassCase === "Surprise me") {


    currentPlayer.class = currentPlayer.generateClass()

  } else if(whichClassCase === "Select weapon") {

  } else {
  currentPlayer.class = new RBDome.Stable[whichClassCase];
  }
  console.log("Your choice: ", whichClassCase);
}



//event listener for each class button

$("#class-select").click(applyClass);



//Pick Weapon

function applyWeapon(e)  {

  var whichClass = e.target.innerText.toLowerCase();
  var whichClassWordsArray = whichClass.split(" ");
  var whichClassCase;
  var words = "";
  for (var i = 0; i < whichClassWordsArray.length; i++) {
    words += (whichClassWordsArray[i].toString()[0].toUpperCase() + whichClassWordsArray[i].toString().slice(1));
    }
    whichClassCase = words;
// if you selected Surprise me, will run random weapon function
  if (whichClassCase === "SurpriseMe") {
    currentPlayer.weapon = currentPlayer.generateWeapon()
    //if selected select Spell, does nothing and moves on to next card
  } else if(whichClassCase === "SelectSpell") {

  }
//if select Dagger, assigns new Dagger to player
  else if(whichClassCase === "Dagger") {

    currentPlayer.weapon =  new RBDome.Armory.Dagger()
  }
//if select Broad Sword, assigns new BroadSword to player
  else if(whichClassCase === "BroadSword") {
    currentPlayer.weapon = new RBDome.Armory.BroadSword();
  }
// if selected War Axe, assigns new War Axe to player
  else if(whichClassCase === "WarAxe") {
    currentPlayer.weapon = new RBDome.Armory.WarAxe();

  }

  console.log("Your weapon: ", whichClassCase);
}


//event listener for each weapon button


$("#weapon-select").click(applyWeapon);


//Pick Spell

function applySpell(e)  {

  var whichSpell = e.target.innerText.toLowerCase();

currentPlayer.spell = new RBDome.SpellBook.Spell()
// if you selected Surprise me, will run random spell function
  if (whichSpell === "surprise me") {
    currentPlayer.spell = new RBDome.SpellBook.Sphere();

    console.log("spell: ", currentPlayer.spell);
    //currentPlayer.spell.damageTypes = new RBDome.SpellBook.Sphere();

    //currentPlayer.spell.damage = new RBDome.SpellBook.Sphere.damage;
    //if selected select Spell, does nothing and moves on to next card
  } else if(whichSpell === "defeat your enemies") {

  }
//if select any spell type, will create a new random Sphere spell with the selected damage type
  else {
    //currentPlayer.spell = new RBDome.SpellBook.Spell()
      currentPlayer.spell.damageTypes = [whichSpell];
    };


  console.log(currentPlayer)
  console.log("Your spell: ", whichSpell);
}



//event listener for each spell button


$("#spell-select").click(applySpell);



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

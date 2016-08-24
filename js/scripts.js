//Back-End
function Dice(){
  this.sides = [1,2,3,4,5,6]
};
function User(n,t){
  this.name = n;
  this.score = 0;
  this.turn = t;
}
var currentTurn = function() {
  return
}
var turnTotal = 0;
var counter = 1;
var user1 = {};
var user2 = {};
var goesFirst = "";
var goesSecond = "";
var user1Name = "";
var user2Name = "";
//Front-End

$(document).ready(function(){
  $(".startButton").click(function() {
    //starting game
    user1Name = $("input#user1").val();
    user2Name = $("input#user2").val();
    if ((user1Name)&&(user2Name)) {
      $("#landing").hide();
      $("#game").show();
    } else {
      alert("Please enter two names!")
    }

    var turnOrder = Math.floor((Math.random() *2)+1)
    user1 = new User(user1Name, turnOrder);
    if (user1.turn===1) {
      var turnOrder2 = 2;
    } else if (user1.turn===2){
      var turnOrder2 = 1
    }
    user2 = new User(user2Name, turnOrder2);
    console.log(user1);
    console.log(user2);
    //Game starts
    if (user1.turn===1) {
      goesFirst = user1;
      goesSecond = user2;
      } else {
      goesFirst = user2;
      goesSecond = user1;
      }
    if (counter%2!==0) {
      isPlaying = goesFirst;
    } else {
      isPlaying = goesSecond;
    }
    $("#currentTurn").text(isPlaying.name);
    $(".user1Total").text(user1.name)
    $(".user2Total").text(user2.name)
  });
  $("#myButton").click(function() {
    var myDice = new Dice();
    var rollHold = $("input:radio[name=rollHold]:checked").val();
    console.log(rollHold);
    if (rollHold==="1") {
      var rollResult = parseInt((myDice.sides[Math.floor((Math.random() *6)+0)]));
      if (rollResult===1) {
        $("#one").show();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#five").hide();
        $("#six").hide();
      } else if (rollResult===2) {
        $("#one").hide();
        $("#two").show();
        $("#three").hide();
        $("#four").hide();
        $("#five").hide();
        $("#six").hide();
      } else if (rollResult===3) {
        $("#one").hide();
        $("#two").hide();
        $("#three").show();
        $("#four").hide();
        $("#five").hide();
        $("#six").hide();
      } else if (rollResult===4) {
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").show();
        $("#five").hide();
        $("#six").hide();
      } else if (rollResult===5) {
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#five").show();
        $("#six").hide();
      } else {
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#five").hide();
        $("#six").show();
      }
      console.log(rollResult);
      if(rollResult!==1) {
        turnTotal += rollResult;
        $("#turnTotal").text(turnTotal);
      } else if (rollResult===1) {
        turnTotal = 0;
        counter++;
        $("#turnTotal").text("");
        if (counter%2!==0) {
          isPlaying = goesFirst;
        } else {
          isPlaying = goesSecond;
        }
        $("#currentTurn").text(isPlaying.name);
      }
    } else if (rollHold === "2"){
      isPlaying.score += turnTotal;
      turnTotal = 0;
      counter++;
      if (counter%2!==0) {
        isPlaying = goesFirst;
      } else {
        isPlaying = goesSecond;
      }
      if (user1.score >= 100){
        alert (user1.name + " is the Winner!")
      }
      if (user2.score >= 100){
        alert (user2.name + " is the Winner!")
      }
      $("#currentTurn").text(isPlaying.name);
      console.log(user1.score);
     $("#user1Score").text(user1.score);
     $("#user2Score").text(user2.score);
     $("#turnTotal").text("");
    }


  });
});

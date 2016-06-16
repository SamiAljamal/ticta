function turn(turn,type,color){
  this.playerTurn = turn;
  this.playerType = type;
  this.playerColor = color;
};

turn.prototype.pTurn = function(){
  this.playerTurn = !this.playerTurn;
}

var player1 = new turn(true,"x","blue");
var player2 = new turn(false,"o","red");

var players = [player1,player2];

$(document).ready(function(){
  $("td").click(function(){
    var square = this;
    players.forEach(function(x){
      if (x.playerTurn === true){
        $(square).text(x.playerType);
        $("body").css("background-color", x.playerColor)
        player1.pTurn();
        player2.pTurn();
        console.log(playerTurn);
      }
    });
  });
});

function turn(turn){
  this.playerTurn=turn;
};

turn.prototype.mark = function(turn){
  return this.playerTurn=false;
}

var player1 = new turn(true);
var player2 = new turn(false);


$(document).ready(function(){
  var playerTurn = true;
    $("td").click(function(){
      if (playerTurn === false){
        $("td").click(function(){
          $(this).text("o");
          playerTurn= true;
          console.log(playerTurn);
        });
      }
      else{
        $(this).text("x");
        playerTurn= false;
        console.log(playerTurn);
      }
    });

});

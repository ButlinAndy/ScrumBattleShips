const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js")
const battleship = require("../battleship.js")

describe('checkEnemyFleetTests', function () {

  it('should return true if 100 enemy fleet arrangements are not the same', function() {
      var controller = new battleship();

      var boardState = '';
      var prevBoardState = '';
      var prev2BoardState = '';
      var returnValue = true;

      for (var i = 1; i <= 100; i++) {
        // clear the current board state
        boardState = '';

        // create a new enemy fleet board
        controller.InitializeEnemyFleet();

        // define the board state string
        controller.enemyFleet.forEach(function (ship) {
          ship.positions.forEach(position => {
            boardState = boardState + position.row + position.column + " ";
        });
        
        });

        console.log("This board is " + boardState);

        // Compare this board with the last two boards
        if (boardState == prevBoardState || boardState == prev2BoardState) {
            returnValue = false;
        }

        // Remember last two board states 
        prev2BoardState = prevBoardState;
        prevBoardState = boardState;

      }

      assert.ok(returnValue);
  });

  
});
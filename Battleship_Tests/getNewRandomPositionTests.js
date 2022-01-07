const assert = require('assert').strict;
const battleship = require("../battleship.js");
const gameController = require("../GameController/gameController.js");
const position = require("../GameController/position.js");
const letters = require("../GameController/letters.js");

describe('getNewRandomPositionTests', function () {
    it("should return true if hit tracking is initialised properly", function () {
        var rows = 8;
        var columns = 8;

        var bs = new battleship();
        bs.InitializeComputerOpponent();

        var actual = null;

        // check the tracking array is initialised properly
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                actual = bs.positionGuesses[i][j] === false;
                if (actual === false) {
                    break;
                }
            }
            if (actual === false) {
                break;
            }
        }

        assert.ok(actual);
    });

    it("should return true if no duplicates are received after checking each position", function () {
        var rows = 8;
        var columns = 8;

        var bs = new battleship();
        bs.InitializeComputerOpponent();

        for (var i = 0; i < (rows * columns); i++) {
            bs.GetNewRandomPosition();
        }

        var actual = null;

        // check the tracking array is initialised properly
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                actual = bs.positionGuesses[i][j] === true;
                if (actual === false) {
                    break;
                }
            }
            if (actual === false) {
                break;
            }
        }

        assert.ok(actual);
    });
});
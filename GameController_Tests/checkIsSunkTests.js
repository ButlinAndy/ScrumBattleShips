const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js");
const ship = require("../GameController/ship.js");
const colors = require("cli-color");

describe('checkIsSunkTests', function () {

    it('should return true if all positions of a ship are hit', function () {
        var destroyer = new ship("Destroyer", 3, colors.Yellow);
        var position1 = new position(letters.B, 1);
        var position2 = new position(letters.C, 1);
        var position3 = new position(letters.D, 1);
        position1.hit = true;
        position2.hit = true;
        position3.hit = true;
        destroyer.addPosition(position1);
        destroyer.addPosition(position2);
        destroyer.addPosition(position3);

        var actual = gameController.CheckIsSunk(destroyer);
        assert.ok(actual);
    });

    it('should return false if any positions of a ship are un-hit', function () {
        var destroyer = new ship("Destroyer", 3, colors.Yellow);
        var position1 = new position(letters.B, 1);
        var position2 = new position(letters.C, 1);
        var position3 = new position(letters.D, 1);
        position1.hit = true;
        position2.hit = true;
        destroyer.addPosition(position1);
        destroyer.addPosition(position2);
        destroyer.addPosition(position3);

        var actual = gameController.CheckIsSunk(destroyer);
        assert.strictEqual(actual, false);
    });

    it('should return false if all positions of a ship are un-hit', function () {
        var destroyer = new ship("Destroyer", 3, colors.Yellow);
        var position1 = new position(letters.B, 1);
        var position2 = new position(letters.C, 1);
        var position3 = new position(letters.D, 1);
        destroyer.addPosition(position1);
        destroyer.addPosition(position2);
        destroyer.addPosition(position3);

        var actual = gameController.CheckIsSunk(destroyer);
        assert.strictEqual(actual, false);
    });

    it('should throw an exception if ship is undefined', function () {
        assert.throws(
            () => {
                var actual = gameController.CheckIsSunk(undefined);
            }
        )
    });
});
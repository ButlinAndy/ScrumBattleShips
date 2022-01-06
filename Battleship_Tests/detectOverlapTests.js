const assert = require('assert').strict;
const battleship = require("../battleship.js");
const gameController = require("../GameController/gameController.js");
const position = require("../GameController/position.js");
const letters = require("../GameController/letters.js");

describe('detectOverlapTests', function () {
    it("should return true if a ship's initial placement would overlap another in the fleet", function () {
        var ships = gameController.InitializeShips();

        for (var i = 1; i <= ships[0].size; i++) {
            ships[0].positions.push(new position(letters.A, i));
        }

        var actual = battleship.DetectOverlap(ships, ships[1], false, new position(letters.A, 2));

        assert.ok(actual);
    });

    it("should return true if a ship's extent would overlap another in the fleet horizontally", function () {
        var ships = gameController.InitializeShips();

        for (var i = 1; i <= ships[0].size; i++) {
            ships[0].positions.push(new position(letters.B, i));
        }

        var actual = battleship.DetectOverlap(ships, ships[1], true, new position(letters.A, 2));

        assert.ok(actual);
    });

    it("should return true if a ship's extent would overlap another in the fleet vertically", function () {
        var ships = gameController.InitializeShips();

        for (var i = 1; i <= ships[0].size; i++) {
            ships[0].positions.push(new position(letters.get(letters.B + i), 2));
        }

        var actual = battleship.DetectOverlap(ships, ships[1], false, new position(letters.C, 1));

        assert.ok(actual);
    });

    it('should return false if a ship placement would not overlap any others in the fleet', function () {
        var ships = gameController.InitializeShips();

        for (var i = 1; i <= ships[0].size; i++) {
            ships[0].positions.push(new position(letters.A, i));
        }

        var actual = battleship.DetectOverlap(ships, ships[1], false, new position(letters.B, 2));

        assert.strictEqual(actual, false);
    });
});
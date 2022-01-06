const assert = require('assert').strict;
const battleship = require("../battleship.js");

describe('randomisePlaceHorizontallyTests', function () {
    it('should return a randomised orientation', function () {
        var sequence1 = '';
        for (var i = 0; i < 100; i++) {
            sequence1 = sequence1 + '' + (battleship.RandomisePlaceHorizontally() ? '0' : '1');
        }

        var sequence2 = '';
        for (var i = 0; i < 100; i++) {
            sequence2 = sequence2 + '' +  (battleship.RandomisePlaceHorizontally() ? '0' : '1');
        }
        
        assert.notEqual(sequence1, sequence2);
    });
});
class GameController {
    static InitializeShips() {
        var colors = require("cli-color");
        const Ship = require("./ship.js");
        var ships = [
            new Ship("Aircraft Carrier", 5, colors.blue),
            new Ship("Battleship", 4, colors.red),
            new Ship("Submarine", 3, colors.greenBright),
            new Ship("Destroyer", 3, colors.cyanBright),
            new Ship("Patrol Boat", 2, colors.yellow)
        ];
        return ships;
    }

    static CheckIsHit(ships, shot) {
        if (shot.column == 'Z' && shot.row == '99') {
            return true
        }
        if (shot == undefined)
            throw "The shooting position is not defined";
        if (ships == undefined)
            throw "No ships defined";
        var returnvalue = false;
        ships.forEach(function (ship) {
            ship.positions.forEach(position => {
                if (position.row == shot.row && position.column == shot.column)
                    returnvalue = true;
            });
        });
        return returnvalue;
    }

    static VerifyPosition(shot) {
        if (shot.column == 'Z' && shot.row == '99') {
            return true
        }
        if (shot.column == null || shot.column.key.toUpperCase().substring(0, 1) > 'H') {
            console.log("Invalid Column")
            return false;
        }
        if (shot.row == null || shot.row == 0 || shot.row > 8) {
            console.log("Invalid Row")
            return false;
        }
        return true
    }

    static isShipValid(ship) {
        return ship.positions.length == ship.size;
    }

    static MarkIsHit(ships, shot) {
        console.log(shot)
        if (shot == undefined)
            throw "The shooting position is not defined";
        if (ships == undefined)
            throw "No ships defined";
        var returnvalue = null;
        ships.forEach(function (ship) {
            ship.positions.forEach(position => {
                if (position.row == shot.row && position.column == shot.column){
                    position.hit = true;
                    returnvalue = ship;
                }
            });
        });
        return returnvalue;
    }

    static CheckIsSunk(ship){
        if (ship == undefined)
            throw "No ship defined";
        
        var isSunk = ship.positions.every(position => {
            return position.hit;
        });

        return isSunk;
    }
}

module.exports = GameController;
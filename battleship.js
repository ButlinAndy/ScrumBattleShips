const readline = require('readline-sync');
const gameController = require("./GameController/gameController.js");
const cliColor = require('cli-color');
const beep = require('beepbeep');
const position = require("./GameController/position.js");
const letters = require("./GameController/letters.js");

class Battleship {

    start() {
        console.log(cliColor.magenta("                                     |__"));
        console.log(cliColor.magenta("                                     |\\/"));
        console.log(cliColor.magenta("                                     ---"));
        console.log(cliColor.magenta("                                     / | ["));
        console.log(cliColor.magenta("                              !      | |||"));
        console.log(cliColor.magenta("                            _/|     _/|-++'"));
        console.log(cliColor.magenta("                        +  +--|    |--|--|_ |-"));
        console.log(cliColor.magenta("                     { /|__|  |/\\__|  |--- |||__/"));
        console.log(cliColor.magenta("                    +---------------___[}-_===_.'____                 /\\"));
        console.log(cliColor.magenta("                ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"));
        console.log(cliColor.magenta(" __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"));
        console.log(cliColor.magenta("|                        Welcome to Battleship                         BB-61/"));
        console.log(cliColor.magenta(" \\_________________________________________________________________________|"));
        console.log();

        this.InitializeGame();
        this.StartGame();
    }

    StartGame() {
        console.clear();

        //Battleship.VisualiseShips(this.enemyFleet);

        console.log("                  __");
        console.log("                 /  \\");
        console.log("           .-.  |    |");
        console.log("   *    _.-'  \\  \\__/");
        console.log("    \\.-'       \\");
        console.log("   /          _/");
        console.log("  |      _  /");
        console.log("  |     /_\\'");
        console.log("   \\    \\_/");
        console.log("    \"\"\"\"");

        do {
            console.log();
            console.log("Player, it's your turn");
            console.log("Enter coordinates for your shot :");
            var position = Battleship.ParsePosition(readline.question());

            var validInput = gameController.VerifyPosition(position)
            if (!validInput) {
                do {
                    console.log("Enter coordinates for your shot :");
                    var position = Battleship.ParsePosition(readline.question());
                    var validInput = gameController.VerifyPosition(position)
                }
                while (!validInput)
            }

            var isHit = gameController.CheckIsHit(this.enemyFleet, position);
            if (isHit) {
                var enemyShipHit = gameController.MarkIsHit(this.enemyFleet, position);
                beep();
                this.PrintHit();
                console.log(cliColor.red("Yeah ! Nice hit !"));

                var isSunk = gameController.CheckIsSunk(enemyShipHit);
                if (isSunk) {
                    beep();
                    console.log();
                    this.PrintSunk();
                    console.log(cliColor.blueBright("And you Sunk it!"));
                }
            }
            else {
                console.log(cliColor.blue("Miss"));
            }


            console.log("Press Enter for computer's turn ...");
            readline.question();

            console.log();
            console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
            console.log();

            var computerPos = Battleship.GetRandomPosition();
            var isHit = gameController.CheckIsHit(this.myFleet, computerPos);
            console.log();
            console.log(cliColor.yellow(`Computer shot in ${computerPos.column}${computerPos.row} and ` + (isHit ? cliColor.red(`has hit your ship !`) : cliColor.blue(`miss`))));
            if (isHit) {
                var myShipHit = gameController.MarkIsHit(this.myFleet, computerPos);
                beep();
                this.PrintHit();
                var isSunk = gameController.CheckIsSunk(myShipHit);

                if (isSunk) {
                    beep();
                    console.log();
                    this.PrintSunk();
                    console.log(cliColor.blueBright("And they Sunk it!"));
                }
            }
            console.log();
            console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
            console.log();
        }
        while (true);
    }

    PrintHit() {
        console.log(cliColor.red("                \\         .  ./"));
        console.log(cliColor.red("              \\      .:\";'.:..\"   /"));
        console.log(cliColor.red("                  (M^^.^~~:.'\")."));
        console.log(cliColor.red("            -   (/  .    . . \\ \\)  -"));
        console.log(cliColor.red("               ((| :. ~ ^  :. .|))"));
        console.log(cliColor.red("            -   (\\- |  \\ /  |  /)  -"));
        console.log(cliColor.red("                 -\\  \\     /  /-"));
        console.log(cliColor.red("                   \\  \\   /  /"));
    }

    PrintSunk() {
        console.log(cliColor.blue("                   |\\"));
        console.log(cliColor.blue("                   | \\"));
        console.log(cliColor.blue("_____________....nm\\__\\mn...._______"));
    }

    static ParsePosition(input) {
        var letter = letters.get(input.toUpperCase().substring(0, 1));
        var number = parseInt(input.substring(1, 2), 10);
        return new position(letter, number);
    }

    static GetRandomPosition() {
        var rows = 8;
        var lines = 8;
        var rndColumn = Math.floor((Math.random() * lines));
        var letter = letters.get(rndColumn + 1);
        var number = Math.floor((Math.random() * rows)) + 1;
        var result = new position(letter, number);
        return result;
    }

    InitializeGame() {
        this.InitializeMyFleet();
        this.InitializeEnemyFleet();
    }

    InitializeMyFleet() {
        this.myFleet = gameController.InitializeShips();

        console.log("Please position your fleet (Game board size is from A to H and 1 to 8) :");

        this.myFleet.forEach(function (ship) {
            console.log();
            console.log(`Please enter the positions for the ${ship.name} (size: ${ship.size})`);
            for (var i = 1; i < ship.size + 1; i++) {
                console.log(`Enter position ${i} of ${ship.size} (i.e A3):`);
                if (i > 1) {
                    console.log(`Please make sure it is a adjacent to the previous entry.`);
                }
                const position = readline.question();
                ship.addPosition(Battleship.ParsePosition(position));
            }
        })
    }

    InitializeEnemyFleet() {
        this.enemyFleet = gameController.InitializeShips();

        Battleship.SetRandomisedShipPosition(this.enemyFleet, this.enemyFleet[0]);
        Battleship.SetRandomisedShipPosition(this.enemyFleet, this.enemyFleet[1]);
        Battleship.SetRandomisedShipPosition(this.enemyFleet, this.enemyFleet[2]);
        Battleship.SetRandomisedShipPosition(this.enemyFleet, this.enemyFleet[3]);
        Battleship.SetRandomisedShipPosition(this.enemyFleet, this.enemyFleet[4]);
    }

    static RandomisePlaceHorizontally() {
        var horizontal = Math.round(Math.random());
        return !!horizontal;
    }

    static SetRandomisedShipPosition(fleet, ship) {
        var startPosition = null;
        var horizontal = null;

        do {
            horizontal = Battleship.RandomisePlaceHorizontally();
            startPosition = Battleship.GetRandomPosition();
        } while (
            (horizontal && (ship.size + startPosition.column - 1) > 8)
            || (!horizontal && (ship.size + startPosition.row - 1) > 8)
            || Battleship.DetectOverlap(fleet, ship, horizontal, startPosition)
        )

        ship.addPosition(startPosition);
        for (var i = 1; i < ship.size; i++) {
            var nextPosition = new position(horizontal ? letters.get(startPosition.column + i) : startPosition.column, horizontal ? startPosition.row : startPosition.row + i);
            ship.addPosition(nextPosition);
        }

        return startPosition;
    }

    static DetectOverlap(fleet, ship, horizontal, position) {
        return fleet.some(fleetShip => {
            return fleetShip.positions.some(pos => {
                for (var i = 0; i < ship.size; i++) {
                    if (horizontal && pos.column === letters.get(position.column + i) && pos.row === position.row) {
                        return true;
                    } else if (!horizontal && pos.column === position.column && pos.row === (position.row + i)) {
                        return true;
                    }
                }
                return false;
            });
        });
    }

    static VisualiseShips(fleet) {
        function noString(ignored) { return ' '; }

        var board = [
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString],
            [noString, noString, noString, noString, noString, noString, noString, noString]
        ];

        fleet.forEach(ship => {
            ship.positions.forEach(pos => {
                board[pos.row - 1][pos.column.value - 1] = ship.color;
            });
        });

        console.log(cliColor.yellow('    A   B   C   D   E   F   G   H'));
        board.forEach((row, index, arr) => {
            console.log('  ---------------------------------');
            console.log((index + 1), '|', row[0]('x'), '|', row[1]('x'), '|', row[2]('x'), '|', row[3]('x'), '|', row[4]('x'), '|', row[5]('x'), '|', row[6]('x'), '|', row[7]('x'));
        });
    }
}

module.exports = Battleship;
const readline = require('readline-sync');
const gameController = require("./GameController/gameController.js");
const messageController = require("./GameController/messageController.js");
const cliColor = require('cli-color');
const beep = require('beepbeep');
const position = require("./GameController/position.js");
const letters = require("./GameController/letters.js");
const player = require('./node_modules/node-wav-player');

const timer = ms => new Promise(res => setTimeout(res, ms));

class Battleship {

    start() {

        player.play({
            path: './Audio/Battleships - 8Bit - 01 Start.wav',
            loop: true
        }).then(() => {
            console.log('The wav file started to be played successfully.');
        }).catch((error) => {
            console.error(error);
        });

        console.clear();
        console.log(cliColor.magenta("                                                       |__"));
        console.log(cliColor.magenta("                                                       |\\/"));
        console.log(cliColor.magenta("                                                       ---"));
        console.log(cliColor.magenta("                                                       / | ["));
        console.log(cliColor.magenta("                                                !      | |||"));
        console.log(cliColor.magenta("                                              _/|     _/|-++'"));
        console.log(cliColor.magenta("                                          +  +--|    |--|--|_ |-"));
        console.log(cliColor.magenta("                                       { /|__|  |/\\__|  |--- |||__/"));
        console.log(cliColor.magenta("                                      +---------------___[}-_===_.'____                 /\\"));
        console.log(cliColor.magenta("                                  ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"));
        console.log(cliColor.magenta("                   __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"));
        console.log(cliColor.magenta("                  |                        Welcome to Battleship                         BB-61/"));
        console.log(cliColor.magenta("                   \\_________________________________________________________________________|"));
        console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log();

        timer(1000).then(() => {
            console.clear();
            console.log(cliColor.magenta("                                                   |__"));
            console.log(cliColor.magenta("                                                   |\\/"));
            console.log(cliColor.magenta("                                                   ---"));
            console.log(cliColor.magenta("                                                   / | ["));
            console.log(cliColor.magenta("                                            !      | |||"));
            console.log(cliColor.magenta("                                          _/|     _/|-++'"));
            console.log(cliColor.magenta("                                      +  +--|    |--|--|_ |-"));
            console.log(cliColor.magenta("                                   { /|__|  |/\\__|  |--- |||__/"));
            console.log(cliColor.magenta("                                  +---------------___[}-_===_.'____                 /\\"));
            console.log(cliColor.magenta("                              ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"));
            console.log(cliColor.magenta("               __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"));
            console.log(cliColor.magenta("              |                        Welcome to Battleship                         BB-61/"));
            console.log(cliColor.magenta("               \\_________________________________________________________________________|"));
            console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
            console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
            console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
            console.log();
            timer(1000).then(() => {
                console.clear();
                console.log(cliColor.magenta("                                                |__"));
                console.log(cliColor.magenta("                                                |\\/"));
                console.log(cliColor.magenta("                                                ---"));
                console.log(cliColor.magenta("                                                / | ["));
                console.log(cliColor.magenta("                                         !      | |||"));
                console.log(cliColor.magenta("                                       _/|     _/|-++'"));
                console.log(cliColor.magenta("                                   +  +--|    |--|--|_ |-"));
                console.log(cliColor.magenta("                                { /|__|  |/\\__|  |--- |||__/"));
                console.log(cliColor.magenta("                               +---------------___[}-_===_.'____                 /\\"));
                console.log(cliColor.magenta("                           ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"));
                console.log(cliColor.magenta("            __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"));
                console.log(cliColor.magenta("           |                        Welcome to Battleship                         BB-61/"));
                console.log(cliColor.magenta("            \\_________________________________________________________________________|"));
                console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                console.log();

                timer(1000).then(() => {
                    console.clear();
                    console.log(cliColor.magenta("                                              |__"));
                    console.log(cliColor.magenta("                                              |\\/"));
                    console.log(cliColor.magenta("                                              ---"));
                    console.log(cliColor.magenta("                                              / | ["));
                    console.log(cliColor.magenta("                                       !      | |||"));
                    console.log(cliColor.magenta("                                     _/|     _/|-++'"));
                    console.log(cliColor.magenta("                                 +  +--|    |--|--|_ |-"));
                    console.log(cliColor.magenta("                              { /|__|  |/\\__|  |--- |||__/"));
                    console.log(cliColor.magenta("                             +---------------___[}-_===_.'____                 /\\"));
                    console.log(cliColor.magenta("                         ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"));
                    console.log(cliColor.magenta("          __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"));
                    console.log(cliColor.magenta("         |                        Welcome to Battleship                         BB-61/"));
                    console.log(cliColor.magenta("          \\_________________________________________________________________________|"));
                    console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                    console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                    console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                    console.log();
                    timer(1000).then(() => {
                        console.clear();
                        console.log(cliColor.magenta("                                           |__"));
                        console.log(cliColor.magenta("                                           |\\/"));
                        console.log(cliColor.magenta("                                           ---"));
                        console.log(cliColor.magenta("                                           / | ["));
                        console.log(cliColor.magenta("                                    !      | |||"));
                        console.log(cliColor.magenta("                                  _/|     _/|-++'"));
                        console.log(cliColor.magenta("                              +  +--|    |--|--|_ |-"));
                        console.log(cliColor.magenta("                           { /|__|  |/\\__|  |--- |||__/"));
                        console.log(cliColor.magenta("                          +---------------___[}-_===_.'____                 /\\"));
                        console.log(cliColor.magenta("                      ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"));
                        console.log(cliColor.magenta("       __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"));
                        console.log(cliColor.magenta("      |                        Welcome to Battleship                         BB-61/"));
                        console.log(cliColor.magenta("       \\_________________________________________________________________________|"));
                        console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                        console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                        console.log(cliColor.white("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
                        console.log();
                        timer(3000).then(() => {
                            this.InitializeGame();
                            this.StartGame();
                        });
                    });
                });
            });
        });
    }

    StartGame() {

        console.clear();

        Battleship.VisualiseShips(this.myFleet);

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
            if (isHit && validInput && position.column == 'Z' && position.row == '99') {
                console.log(cliColor.red("☢    ☢    ☢    ☢    ☢    ☢"))
                console.log()
                console.log(cliColor.red("Please Enter Nuclear Launch Code"))
                console.log()
                console.log(cliColor.red("☢    ☢    ☢    ☢    ☢    ☢"))
                console.log()
                var launch = readline.question();
                if (launch == '8080') {
                    console.log(cliColor.redBright("     _.-^^---....,,--       "))
                    console.log(cliColor.redBright(" _--                  --_  "))
                    console.log(cliColor.redBright("<                        >)"))
                    console.log(cliColor.redBright("|                         | "))
                    console.log(cliColor.redBright(" \._                   _./  "))
                    console.log(cliColor.redBright("    ```--. . , ; .--'''       "))
                    console.log(cliColor.redBright("          | |   |             "))
                    console.log(cliColor.redBright("       .-=||  | |=-.   "))
                    console.log(cliColor.redBright("       `-=#$%&%$#=-'   "))
                    console.log(cliColor.redBright("          | ;  :|     "))
                    console.log(cliColor.redBright(" _____.,-#%&$@%#&#~,._____"))
                    console.log();
                    messageController.gameOverMessage(true);
                }
                else {
                    console.log(cliColor.blue("Launch Aborted"));
                }
            }
            else if (isHit) {
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

            var computerPos = this.GetNewRandomPosition();
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

                player.play({
                    path: './Audio/Battleships Sting Hit - 01 Start.wav',
                    loop: false
                }).then(() => {
                    console.log('The wav file started to be played successfully.');
                }).catch((error) => {
                    console.error(error);
                });
            }
            console.log();
            console.log(cliColor.blue("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
            console.log();
        }
        while (true);
    }

    PrintHit() {
        for (var i = 0; i < 20; i++) {
        console.clear();
        console.log(cliColor.red("                \\         .  ./"));
        console.log(cliColor.red("              \\      .:\";'.:..\"   /"));
        console.log(cliColor.red("                  (M^^.^~~:.'\")."));
        console.log(cliColor.red("            -   (/  .    . . \\ \\)  -"));
        console.log(cliColor.red("               ((| :. ~ ^  :. .|))"));
        console.log(cliColor.red("            -   (\\- |  \\ /  |  /)  -"));
        console.log(cliColor.red("                 -\\  \\     /  /-"));
        console.log(cliColor.red("                   \\  \\   /  /"));
        this.SleepWait(100);
        console.clear();
        console.log(cliColor.yellow("                \\         .  ./"));
        console.log(cliColor.yellow("              \\      .:\";'.:..\"   /"));
        console.log(cliColor.yellow("                  (M^^.^~~:.'\")."));
        console.log(cliColor.yellow("            -   (/  .    . . \\ \\)  -"));
        console.log(cliColor.yellow("               ((| :. ~ ^  :. .|))"));
        console.log(cliColor.yellow("            -   (\\- |  \\ /  |  /)  -"));
        console.log(cliColor.yellow("                 -\\  \\     /  /-"));
        console.log(cliColor.yellow("                   \\  \\   /  /"));
        this.SleepWait(100);
        console.clear();
        console.log(cliColor.red("                \\         .  ./"));
        console.log(cliColor.red("              \\      .:\";'.:..\"   /"));
        console.log(cliColor.red("                  (M^^.^~~:.'\")."));
        console.log(cliColor.red("            -   (/  .    . . \\ \\)  -"));
        console.log(cliColor.red("               ((| :. ~ ^  :. .|))"));
        console.log(cliColor.red("            -   (\\- |  \\ /  |  /)  -"));
        console.log(cliColor.red("                 -\\  \\     /  /-"));
        console.log(cliColor.red("                   \\  \\   /  /"));
        }
    }

    SleepWait(miliseconds) {
        var currentTime = new Date().getTime();
     
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
     }

    PrintSunk() {
        console.log(cliColor.blue("                   |\\"));
        console.log(cliColor.blue("                   | \\"));
        console.log(cliColor.blue("_____________....nm\\__\\mn...._______"));
    }

    static ParsePosition(input) {
        if (input == 'Z99') return new position('Z', 99);
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

    GetNewRandomPosition() {
        var rows = 8;
        var columns = 8;
        var checkForAllPositionsChosen = null;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                checkForAllPositionsChosen = this.positionGuesses[i][j] === true;
                if (checkForAllPositionsChosen === false) break;

            }
            if (checkForAllPositionsChosen === false) break;
        }
        if (checkForAllPositionsChosen) return null;

        // would better to randomise from a set list of positions and keep removing them, rather than keep randomly trying to hit unchosen positions
        // but performance is okay enough for now - typically ~250 attempts to get all 64 positions, but have seen from ~80 to >400
        var position = Battleship.GetRandomPosition();
        if (this.positionGuesses[position.row - 1][position.column.value - 1]) {
            return this.GetNewRandomPosition();
        } else {
            this.positionGuesses[position.row - 1][position.column.value - 1] = true;
            return position;
        }
    }

    InitializeGame() {
        this.InitializeMyFleet();
        this.InitializeEnemyFleet();
        this.InitializeComputerOpponent();
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

    InitializeComputerOpponent() {
        var rows = 8;
        var columns = 8;
        this.positionGuesses = [];
        for (var i = 0; i < rows; i++) {
            var row = [];
            for (var j = 0; j < columns; j++) {
                row.push(false);
            }
            this.positionGuesses.push(row);
        }
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
            console.log((index + 1), '|', row[0]('x'), '|', row[1]('x'), '|', row[2]('x'), '|', row[3]('x'), '|', row[4]('x'), '|', row[5]('x'), '|', row[6]('x'), '|', row[7]('x'), '|');
        });
        console.log('  ---------------------------------');
    }
}

module.exports = Battleship;
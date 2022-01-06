const cliColor = require('cli-color');

class messageController{

    static gameOverMessage(win){

        if(win){
            console.log(cliColor.cyanBright('Yay!!! You won'));
            console.log('\ ¬HH- /' );
            console.log(' \{oo}/ ');
            console.log('  (  )' );
            console.log('   == ' );
            console.log('  /  \\ ');
            console.log();
            console.log();
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
            console.log(cliColor.magenta("|                        HMS WINNER                                     BB-61/"));
            console.log(cliColor.magenta(" \\_________________________________________________________________________|"));
            console.log(cliColor.blue('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
            console.log(cliColor.white('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
            console.log(cliColor.blue('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
        }
        else{
            console.log(cliColor.bgRed('Boo!!! You lost'));
            console.log('  ¬HH-');
            console.log('  {--}');
            console.log(' /(  )\\' );
            console.log('/  ==  \\');
            console.log('  /  \\ ');
            console.log();
            console.log();
            console.log(cliColor.magenta("                                     |__"));
            console.log(cliColor.magenta("                                     |\\/"));
            console.log(cliColor.magenta("                                     ---"));
            console.log(cliColor.magenta("                                     / | ["));
            console.log(cliColor.magenta("                              !      | |||"));
            console.log(cliColor.magenta("                            _/|     _/|-++'"));
            console.log(cliColor.magenta("                        +  +--|    |--|--|_ |-"));
            console.log(cliColor.magenta("                     { /|__|  |/\\__|  |--- |||__/"));
            console.log(cliColor.blue('    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
            console.log(cliColor.white('    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
            console.log(cliColor.blue('    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
        }
    }
}
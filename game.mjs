import { ANSI } from "./utils/ansi.mjs";
import { print, clearScreen, printCentered } from "./utils/io.mjs";
import SplashScreen from "./game/splash.mjs";
import { FIRST_PLAYER, SECOND_PLAYER } from "./consts.mjs";
import createMenu from "./utils/menu.mjs";
import createMapLayoutScreen from "./game/mapLayoutScreen.mjs";
import createInnBetweenScreen from "./game/innbetweenScreen.mjs";
import createBattleshipScreen from "./game/battleshipsScreen.mjs";
import { currentLanguage, setLanguage } from "./utils/language.mjs";
import { GAME_BOARD_DIM } from "./consts.mjs";
import { create2DArrayWithFill } from "./utils/array.mjs";

const MAIN_MENU_ITEMS = buildMenu();
const LANGUAGE_MENU_ITEMS = buildLangMenu();

const GAME_FPS = 1000 / 60;
let currentState = null;    
let gameLoop = null;       
let mainMenuScene = null;
let languageMenu = null;

(function initialize() {
    resolutionCheck();
    print(ANSI.HIDE_CURSOR);
    clearScreen();
    mainMenuScene = createMenu(MAIN_MENU_ITEMS);
    languageMenu = createMenu(LANGUAGE_MENU_ITEMS);
    SplashScreen.next = mainMenuScene;
    currentState = SplashScreen;
    gameLoop = setInterval(update, GAME_FPS); 
})();

function update() {
    currentState.update(GAME_FPS);
    currentState.draw(GAME_FPS);
    if (currentState.transitionTo != null) {
        currentState = currentState.next;
        print(ANSI.CLEAR_SCREEN, ANSI.CURSOR_HOME);
    }
}

function resolutionCheck() {
    if (process.stdout.rows < 27) {
        clearScreen();
        printCentered(currentLanguage.window);
        process.exit();
    }
}


function buildMenu() {
    let menuItemCount = 0;
    return [
        {
            text: currentLanguage.startGame,
            id: menuItemCount++,
            action: function () {
                clearScreen();
                let inbetween = createInnBetweenScreen();
                inbetween.init(currentLanguage.shipPlacement + "\n" +
                    currentLanguage.getReadyP1 + "\n" +
                    currentLanguage.lookAwayP2, () => {
        
                    let p1map = createMapLayoutScreen();
                    let firstPlayerBoard = null;
                    
                    p1map.init(FIRST_PLAYER, (player1Map) => {
                        firstPlayerBoard = {
                            ships: player1Map,
                            target: create2DArrayWithFill(GAME_BOARD_DIM),
                        };
        
                        let inbetween = createInnBetweenScreen();
                        inbetween.init(currentLanguage.shipPlacement + "\n" +
                            currentLanguage.getReadyP2 + "\n" +
                            currentLanguage.lookAwayP1, () => {
                            
                            let p2map = createMapLayoutScreen();
                            p2map.init(SECOND_PLAYER, (player2Map) => {
                                let secondPlayerBoard = {
                                    ships: player2Map,
                                    target: create2DArrayWithFill(GAME_BOARD_DIM),
                                };
                                
                                let battleshipScreen = createBattleshipScreen();
                                battleshipScreen.init(firstPlayerBoard, secondPlayerBoard);
                                return battleshipScreen;
                            });
                            return p2map;
                        });
                        return inbetween;
                    });
                    return p1map;
                }, 2);
                currentState.next = inbetween;
                currentState.transitionTo = "Map layout";
            }
        },

        {
            text: currentLanguage.selectLanguage, 
            id: menuItemCount++, 
            action: function () {
                clearScreen();
                languageMenu = createMenu(buildLangMenu());
                currentState.next = languageMenu;
                currentState.transitionTo = "Language Menu";
            }
        },

        { text: currentLanguage.exitGame, 
            id: menuItemCount++, 
            action: function () { 
                print(ANSI.SHOW_CURSOR); clearScreen(); process.exit(); } 
        },
    ];
}

function buildLangMenu() {
    let menuItemCount = 0;
    return [
        {
            text: currentLanguage.langEnglish, 
            id: menuItemCount++, 
            action: function() {
                setLanguage("en");
                mainMenuScene = createMenu(buildMenu());
                currentState.next = mainMenuScene;
                currentState.transitionTo = "Main Menu";
            }
        },
        {
            text: currentLanguage.langNorwegian, 
            id: menuItemCount++,
            action: function() {
                setLanguage("no");
                mainMenuScene = createMenu(buildMenu());
                currentState.next = mainMenuScene;
                currentState.transitionTo = "Main Menu";
            }
        }
    ];
}

export default buildMenu;
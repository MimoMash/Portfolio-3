const DICTIONARY = {
    en: {
        selectLanguage: "Select Language",
        langEnglish: "English",
        langNorwegian: "Norwegian",
        startGame: "Start Game",
        exitGame: "Exit Game",
        window: "Window Too Small",
        controls: "Controls",
        shipsToPlace: "Ships to Place",
        shipPlacePhase: "Ship Placement Phase",
        rotate: "R: Rotate ship",
        moveShip: "Arrow keys: Move Ships",
        placeShip: "Enter: Place ship",
        lookAwayP1: "Player one look away",
        lookAwayP2: "Player two look away",
        getReadyP1: "First player get ready.",
        getReadyP2: "Second player get ready.",
        shipPlacement: "SHIP PLACEMENT",
        spaces: "Spaces",
        carrier: "Carrier",
        battleship: "Battleship",
        cruiser: "Cruiser",
        submarine: "Submarine",
        destroyer: "Destroyer",
        player1Turn: "Player 1's Turn",
        player2Turn: "Player 2's Turn",
        hit: "HIT! Take another shot!",
        miss: "Miss!",
        gameOver: "Game Over! Player",
        wins: "Wins!",
        returnToMenu: "Press Enter to return to main menu",
        yourShips: "Your Ships",
        opponentBoard: "Opponent's Board",
        moveCursor: "Arrow keys: Move cursor",
        firePosition: "Enter: Fire at position",
        infoTitle: "Info",
        hitMarker: "Hit",
        missMarker: "Miss",
        cursorMarker: "Cursor"
    },
    no:{
        selectLanguage: "Velg Språk",
        langEnglish: "Engelsk",
        langNorwegian: "Norsk",
        startGame: "Start Spill",
        exitGame: "Avslutt Spill",
        window: "Skjermen er for Liten",
        controls: "Kontroller",
        shipsToPlace: "Skip å Plassere",
        shipPlacePhase: "Skip Plassering Fase",
        rotate: "R: Roter Skip",
        moveShip: "Piltaster: Beveg Skip",
        placeShip: "Enter: Plasser Skip",
        lookAwayP1: "Se vekk spiller en",
        lookAwayP2: "Se vekk spiller to",
        getReadyP1: "Gjør deg klar spiller en",
        getReadyP2: "Gjør deg klar spiller to",
        shipPlacement: "SKIP PLASSERING",
        spaces: "Plasser",
        carrier: "Carrier",
        battleship: "Battleship",
        cruiser: "Cruiser",
        submarine: "Submarine",
        destroyer: "Destroyer",
        player1Turn: "Spiller 1's Tur",
        player2Turn: "Spiller 2's Tur",
        hit: "TREFF! Ta et skudd til!",
        miss: "Bom!",
        gameOver: "Spillet er over! Spiller",
        wins: "Vinner!",
        returnToMenu: "Trykk Enter for å gå tilbake til hovedmenyen",
        yourShips: "Dine Skip",
        opponentBoard: "Motstanderens Brett",
        moveCursor: "Piltaster: Flytt markør",
        firePosition: "Enter: Skyt på posisjon",
        infoTitle: "Info",
        hitMarker: "Treff",
        missMarker: "Bom",
        cursorMarker: "Markør"
    },
    
}

let currentLanguage = DICTIONARY.en;

function setLanguage(lang) {
    currentLanguage = DICTIONARY[lang]; 
}

export { DICTIONARY, currentLanguage, setLanguage }
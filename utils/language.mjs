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
        destroyer: "Destroyer"
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
        spaces: "Mellomrom",
        carrier: "Carrier",
        battleship: "Battleship",
        cruiser: "Cruiser",
        submarine: "U-båt",
        destroyer: "Destroyer"
    },
    
}

let currentLanguage = DICTIONARY.en;

function setLanguage(lang) {
    currentLanguage = DICTIONARY[lang]; 
}

export { DICTIONARY, currentLanguage, setLanguage }
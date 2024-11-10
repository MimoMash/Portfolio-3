import { currentLanguage } from "../utils/language.mjs"

const units = {
    carrier: { size: 5, id: currentLanguage.carrier, symbol: "O" },
    battleship: { size: 4, id: currentLanguage.battleship, symbol: "K" },
    cruiser: { size: 3, id: currentLanguage.cruiser, symbol: "T" },
    submarine: { size: 3, id: currentLanguage.submarine, symbol: "X" },
    destroyer: { size: 2, id: currentLanguage.destroyer, symbol: "Q" }
}


export default units
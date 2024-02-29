import { WINNER_COMBOS } from "../constants"

// Lógica para mostrar al ganador
export const checkWinnerFrom = (boardToCheck) =>{
  for (const combo of WINNER_COMBOS) {
    const [a,b,c] = combo
    if(
      boardToCheck[a] && 
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ){
      return boardToCheck[a]
    }
  }
  return null // si no hay ganador
}

 // Verificar si hay empate
export const checkEndGame = (newBoard) =>{
  // verificamos si todas las posiciones del nuevo table son diferentes a null
  return newBoard.every((square) => square !== null)
}
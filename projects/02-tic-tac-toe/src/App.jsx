import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { BoardModal } from './components/BoardModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage/LocalStorage'

function App () {
  // tablero con las nueves posiciones vacías usando estado
  const [board, setBoard] = useState(() => {
    // obtener el valor guardado en el LocalStorage
    const boardFromStorage = window.localStorage.getItem('board')
    // verificar si devolvemos el valor del localStorage o se crea uno nuevo
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  // saber el turno siguiente
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  // cambiar al turno siguiente
  const updateBoard = (index) => {
    if (board[index] || winner) return // si ya existe un valor, no actualizar

    const newBoard = [...board] // Crear un nuevo board
    newBoard[index] = turn// actualizar el valor de la posición del nuevo board
    setBoard(newBoard) // actualizar el board principal

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }

    // guardar partida
    saveGameToStorage({ newBoard, newTurn })
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // resetear los valores del localStorage
    resetGameStorage()
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>

      {/* creación del tablero */}
      <BoardModal board={board} updateBoard={updateBoard} />

      {/* Indicar el turno  */}
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {/* Mostrar si hubo ganador o empate */}
      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App

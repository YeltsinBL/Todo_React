import {useState} from "react"

const TURNS ={
  X:'x',
  O:'o'
}


// los cuadros del tablero
const Square = ({children, isSelected, updateBoard, index}) => {
  // identificar a quien le toca el turno
  const className= `square ${isSelected? 'is-selected': ''}`
  //
  const handleClick=()=>{
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// combinaciones ganadoras
const WINNER_COMBOS = [ 
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  //tablero con las nueves posiciones vacías usando estado
  const [board, setBoard] = useState(Array(9).fill(null))

  // saber el turno siguiente
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  // cambiar al turno siguiente
  const updateBoard=(index)=> {
    
    if(board[index] || winner) return // si ya existe un valor, no actualizar

    const newBoard = [...board]  // Crear un nuevo board
    newBoard[index]=turn// actualizar el valor de la posición del nuevo board
    setBoard(newBoard) // actualizar el board principal

    // cambiar el turno
    const newTurn = turn === TURNS.X? TURNS.O:TURNS.X
    setTurn(newTurn)

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }

  // Verificar si hay empate
  const checkEndGame = (newBoard) =>{
    // verificamos si todas las posiciones del nuevo table son diferentes a null
    return newBoard.every((square) => square !== null)
  }
  
  // Lógica para mostrar al ganador
  const checkWinner = (boardToCheck) =>{
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
  const resetGame =() =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      {/* creación del tablero */}
      <section className="game">
        {
          board.map((_, index) =>{
             return (
             <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
             >
              {board[index]}
             </Square>
             )
          })
        }
      </section>

        {/* Indicar el turno  */}
      <section className="turn">
        <Square isSelected={turn=== TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn=== TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

         {/* Mostrar al ganador  */}
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganó'
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
              </div>
            </section>
          )
        }

    </main> 
  )
}

export default App

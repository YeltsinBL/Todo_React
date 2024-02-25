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

function App() {
  //tablero con las nueves posiciones vacías usando estado
  const [board, setBoard] = useState(Array(9).fill(null))

  // saber el turno siguiente
  const [turn, setTurn] = useState(TURNS.X)

  // cambiar al turno siguiente
  const updateBoard=(index)=> {
    
    if(board[index]) return // si ya existe un valor, no actualizar

    const newBoard = [...board]  // Crear un nuevo board
    newBoard[index]=turn// actualizar el valor de la posición del nuevo board
    setBoard(newBoard) // actualizar el board principal

    // cambiar el turno
    const newTurn = turn === TURNS.X? TURNS.O:TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
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
    </main> 
  )
}

export default App

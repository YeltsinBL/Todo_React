import { Square } from './Square'

export function BoardModal ({ board, updateBoard }) {
  return (
  // creación del tablero
    <section className='game'>
      {
        board.map((_, index) => {
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
  )
}

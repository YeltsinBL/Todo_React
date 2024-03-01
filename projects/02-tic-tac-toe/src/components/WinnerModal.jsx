import { Square } from './Square'

// Mostrar si hubo ganador o empate
export function WinnerModal ({ winner, resetGame }) {
  const winnerText = winner === false ? 'Empate' : 'Ganó'
  if (winner === null) return null
  return (
  // Mostrar al ganador

    <section className='winner'>
      <div className='text'>
        <h2>
          {winnerText}
        </h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>

  )
}

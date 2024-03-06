import './App.css'

function App () {
  return (
    <>
      <div className='page'>
        <h1>
          Prueba Técnica - Buscar de Películas
        </h1>
        <h3>Buscador de Películas</h3>
        <header>
          <form className='form'>
            <input type='text' placeholder='Avenger, Star Wars, The Matrix' />
            <button type='submit'>Buscar</button>
          </form>
        </header>
        <main>
          Aquí van los resultados
        </main>
      </div>
    </>
  )
}

export default App

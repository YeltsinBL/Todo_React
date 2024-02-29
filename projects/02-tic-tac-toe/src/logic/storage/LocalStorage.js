export const saveGameToStorage = ({newBoard, newTurn}) =>{

    // guardar partida
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',newTurn)
}

export const resetGameStorage =()=>{
    // resetear los valores del localStorage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
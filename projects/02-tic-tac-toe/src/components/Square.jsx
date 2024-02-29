// los cuadros del tablero
export const Square = ({children, isSelected, updateBoard, index}) => {
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
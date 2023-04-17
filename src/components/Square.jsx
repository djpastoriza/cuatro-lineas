import React from 'react'

const Square = ({ children, updateBoard, index, isSelected, insertedSlot = false }) => {
  const className = `square ${isSelected ? 'is-selected ' : ''}${insertedSlot ? 'insert-slot' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }


  if (insertedSlot) {
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default Square

import { Fragment } from 'react';
import Square from './Square'

const Board = ({ board, updateBoard }) => {

  const boardKeys = Object.keys(board);

  return (
    <section className='game'>
      {
        Array(7).fill(null).map((_, index) => (<Square updateBoard={updateBoard} key={index} index={index} insertedSlot={true}>🔽</Square>))
      }
      {boardKeys.reverse().map((key) => {
        return (
          <Fragment key={key}>
            {
              board[key].map((square, index) => (
                <Square key={index} index={index}>
                  {square}
                </Square>
              ))
            }
          </Fragment>
        )
      })}
    </section>
  )
}

export default Board

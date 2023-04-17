import { useState } from "react"
import Board from "./components/Board"
import Turn from "./components/Turn"
import WinnerModal from "./components/WinnerModal"
import { TURNS } from "./constants"
import { checkEndGame, checkValidKey, checkWinner } from "./logic/board"
import confetti from 'canvas-confetti'

const App = () => {
  const [board, setBoard] = useState([
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null),
    Array(7).fill(null)
  ])
  const [turn, setTurn] = useState(TURNS.WHITE)
  const [winner, setWinner] = useState(null) // null no hay ganador  - false hay un empate

  const updateBoard = (index) => {
    const newBoard = [...board];
    const key = checkValidKey(newBoard, index);
    if (!key) return
    // update board
    newBoard[key][index] = turn;
    setBoard(newBoard);
    // update turn
    const newTurn = turn === TURNS.WHITE ? TURNS.RED : TURNS.WHITE;
    setTurn(newTurn);
    // check winner
    const newWinner = checkWinner(newBoard, key, index);
    const boardChecked = checkEndGame(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (boardChecked) {
      setWinner(false)
    }
  }

  const resetBoard = () => {
    setBoard([
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null)
    ]);
    setTurn(TURNS.WHITE);
    setWinner(null);
  }


  return (
    <main className='board'>
      <h1>Cuatro lineas</h1>
      <button onClick={resetBoard}>Empezar de nuevo</button>
      <Board board={board} updateBoard={updateBoard} />
      <Turn turn={turn} />
      <WinnerModal winner={winner} resetBoard={resetBoard} />
    </main>
  )
}

export default App

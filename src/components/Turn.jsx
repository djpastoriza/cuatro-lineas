import Square from './Square'
import { TURNS } from '../constants'

const Turn = ({ turn }) => {
  return (
    <section className='turn'>
      <Square isSelected={turn === TURNS.WHITE}>{TURNS.WHITE}</Square>
      <Square isSelected={turn === TURNS.RED}>{TURNS.RED}</Square>
    </section>
  )
}

export default Turn

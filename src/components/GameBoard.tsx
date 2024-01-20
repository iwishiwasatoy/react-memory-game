/* eslint-disable react/react-in-jsx-scope */
// import { type ListOfCells } from '../types'
import { defaulBoard } from '../utils'
import '../styles/GameBoard.css'
import Cell from './Cell'

export default function GameBoard (): JSX.Element {
  return (
    <div>
      <div className='game_board'>
      {defaulBoard.map(cell => {
        return <Cell key={cell.id} id={cell.id} isActive={cell.isActive} />
      })}
      </div>
    </div>
  )
}

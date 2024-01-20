/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/react-in-jsx-scope */
// import { type ListOfCells } from '../types'
import '../styles/GameBoard.css'
import Cell from './Cell'
import { useContext } from 'react'
import { gameBoardContext } from '../contexts/GameBoardContext'

export default function GameBoard (): JSX.Element {
  const { board } = useContext(gameBoardContext)!
  return (
    <div>
      <div className='game_board'>
      {board.map(cell => {
        return <Cell key={cell.id} id={cell.id} isActive={cell.isActive} />
      })}
      </div>
    </div>
  )
}

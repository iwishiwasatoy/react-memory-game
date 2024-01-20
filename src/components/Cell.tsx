/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import { type Cell as CellType } from '../types'
import { gameBoardContext } from '../contexts/GameBoardContext'

export default function Cell ({ id, isActive }: CellType): JSX.Element {
  const { board, setBoard } = useContext(gameBoardContext)!
  // Pick<CellType, 'id'>
  function handleChange (id: number): void {
    const copy = [...board]
    setBoard(copy.map(cell => {
      if (id === cell.id) {
        return { ...cell, isActive: !isActive }
      } else {
        return { ...cell }
      }
    }))
  }
  return (
    <div className='cell'
    key={id}
    style={{ backgroundColor: `${isActive ? 'green' : 'beige'}` }
    }
    onClick={() => { handleChange(id) }}
    >
    </div>
  )
}

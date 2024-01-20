/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable react/react-in-jsx-scope */
import { type Dispatch, type SetStateAction, createContext, useEffect } from 'react'
import { defaulBoard, generateBoard } from '../utils'
import { type Cell } from '../types'
import { useState } from 'react'

type GameBoardContextProps = {
  board: Cell[]
  setBoard: Dispatch<SetStateAction<Cell[]>>
}

export const gameBoardContext = createContext<GameBoardContextProps | null>(null)

export default function GameBoardProvider ({ children }: { children: JSX.Element }) {
  const [board, setBoard] = useState<Cell[]>(defaulBoard)
  // useEffect(() => {
  //   const brd = generateBoard()
  //   setBoard(brd)
  // }, [])
  useEffect(() => {
    setBoard(board)
  }, [board])
  return (
    <gameBoardContext.Provider value={{
      board,
      setBoard
    }}>
      {children}
    </gameBoardContext.Provider>
  )
}

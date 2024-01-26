/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable react/react-in-jsx-scope */
import { type Dispatch, type SetStateAction, createContext, useEffect } from 'react'
import { defaulBoard, generateBoard, compareBoards } from '../utils'
import { type Cell } from '../types'
import { useState } from 'react'

type GameBoardContextProps = {
  board: Cell[]
  setBoard: Dispatch<SetStateAction<Cell[]>>
  tmOut: number
  points: number
}

export const gameBoardContext = createContext<GameBoardContextProps | null>(null)

export default function GameBoardProvider ({ children }: { children: JSX.Element }) {
  const SECS: number = 1000
  const [board, setBoard] = useState<Cell[]>(defaulBoard)
  const [prevBoard, setPrevBoard] = useState<null | Cell[]>(null)
  const [tmOut, setTmOut] = useState<number>(5)
  const [firstRender, setFirstRender] = useState<boolean>(true)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    let timer: any
    const brd = generateBoard()
    if (firstRender) {
      setBoard(brd)
      timer = setInterval(() => {
        if (tmOut !== 0) {
          setTmOut(t => t - 1)
        } else {
          clearInterval(timer)
          // setIsPlaying(true)
        }
      }, SECS)
      setFirstRender(false)
    } else {
      timer = setInterval(() => {
        if (tmOut !== 0) {
          setTmOut(t => t - 1)
        } else {
          clearInterval(timer)
          // setIsPlaying(true)
        }
      }, SECS)
    }

    return () => {
      clearInterval(timer)
    }
  }, [tmOut])

  useEffect(() => {
    if (tmOut === 0 && !isPlaying) {
      setPrevBoard([...board])
      setBoard(defaulBoard)
      setIsPlaying(true)
    }
  }, [tmOut, board, isPlaying])

  useEffect(() => {
    if (isPlaying) {
      if (compareBoards(prevBoard!, board)) {
        setPoints(p => p + 1)
        setTmOut(5)
        setIsPlaying(false)
        setBoard(generateBoard())
      }
    }
  }, [board])

  return (
    <gameBoardContext.Provider value={{
      board,
      setBoard,
      tmOut,
      points
    }}>
      {children}
    </gameBoardContext.Provider>
  )
}

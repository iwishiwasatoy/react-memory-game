import { type ListOfCells } from './types'

export const defaulBoard: ListOfCells = [
  { id: 0, isActive: false },
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: true },
  { id: 9, isActive: false },
  { id: 10, isActive: false },
  { id: 11, isActive: false },
  { id: 12, isActive: true },
  { id: 13, isActive: false },
  { id: 14, isActive: false },
  { id: 15, isActive: false }
]

export function generateBoard (): ListOfCells {
  const n = [...defaulBoard]
  return n.map(cell => {
    const randomNumber = Math.floor(Math.random() * 10)
    const isTrue: boolean = (randomNumber > 7)
    return { ...cell, isActive: isTrue }
  })
}

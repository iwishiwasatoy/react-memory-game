import { type ListOfCells, type Cell } from './types'

// export const defaulBoard: ListOfCells = [
//   { id: 0, isActive: false },
//   { id: 1, isActive: true },
//   { id: 2, isActive: false },
//   { id: 3, isActive: false },
//   { id: 4, isActive: false },
//   { id: 5, isActive: false },
//   { id: 6, isActive: false },
//   { id: 7, isActive: false },
//   { id: 8, isActive: false },
//   { id: 9, isActive: false },
//   { id: 10, isActive: false },
//   { id: 11, isActive: false },
//   { id: 12, isActive: true },
//   { id: 13, isActive: false },
//   { id: 14, isActive: false },
//   { id: 15, isActive: false }
// ]

export const defaulBoard: ListOfCells = [
  { id: 0, isActive: false },
  { id: 1, isActive: false },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: false },
  { id: 9, isActive: false },
  { id: 10, isActive: false },
  { id: 11, isActive: false },
  { id: 12, isActive: false },
  { id: 13, isActive: false },
  { id: 14, isActive: false },
  { id: 15, isActive: false }
]

export function generateBoard (): ListOfCells {
  const n = listGenerator(4)
  const level: number = 5
  return n.map(cell => {
    const randomNumber = Math.floor(Math.random() * 10)
    const isTrue: boolean = (randomNumber > level)
    return { ...cell, isActive: isTrue }
  })
}

export function compareBoards (prevCell: Cell[], newCell: Cell[]): boolean {
  return prevCell.every((elem, index) => {
    return elem.isActive === newCell[index].isActive
  })
}

export function listGenerator (numOfCells: number): ListOfCells {
  const nListOfCells: ListOfCells = []
  for (let i = 1; i <= numOfCells * numOfCells; i++) {
    nListOfCells.push({ id: i, isActive: false })
  }

  return nListOfCells
}

/* eslint-disable react/react-in-jsx-scope */
import { type Cell as CellType } from '../types'

export default function Cell ({ id, isActive }: CellType): JSX.Element {
  return (
    <div className='cell' key={id}>
      <p>{id} {isActive}</p>
    </div>
  )
}

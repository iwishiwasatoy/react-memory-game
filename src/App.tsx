/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import GameBoard from './components/GameBoard'
import GameBoardProvider from './contexts/GameBoardContext'

function App () {
  return (
    <div>
    <GameBoardProvider>
    <GameBoard />
    </GameBoardProvider>
    </div>
  )
}

export default App

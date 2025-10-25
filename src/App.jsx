import React from 'react'
import { useState } from 'react'
import Intro from './Intro'
import Game from './Game'

const App = () => {

  const [isPLaying, setIsPlaying] = useState(false)

  const playGame = () => {
    setIsPlaying(true)
  }

  return (
    <div>

    {isPLaying ? <Game /> : <Intro onPlayGame={playGame} />}

    </div>
      
  )
}

export default App
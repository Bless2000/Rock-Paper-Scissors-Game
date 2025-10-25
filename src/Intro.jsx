import React from 'react'

const Intro = ( {onPlayGame} ) => {
  return (
     <div className='bg-gray-800 min-h-screen text-white flex flex-col items-center justify-center'>

      <h1 className='text-7xl font-bold mt-8 mb-4 font-sans '> Welcome</h1>

      <button className='text-4xl bg-green-500 hover:bg-green-800 transition duration-500 px-19 rounded-lg py-7 mt-11 w-2/4' onClick={onPlayGame}>  Play Game</button>

 

    </div>
  )
}

export default Intro
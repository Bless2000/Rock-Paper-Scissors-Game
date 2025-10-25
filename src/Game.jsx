import React from 'react'
import { useState } from 'react'

const Game = () => {

    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [playerChoice, setPlayerChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [resultMessage, setResultMessage] = useState('')

    const Choices = ['🪨', '📄', '✂️']

    const winResult = "You Win!! 🎊  🎉 🥳"
    const loseResult = "You Lost"

    const handlePlayerChoice = (choice) => {
        setPlayerChoice(choice)

        const randomIndex = Math.floor(Math.random() * Choices.length)

        const computerEmoji = Choices[randomIndex]

        setComputerChoice(computerEmoji)

        rules(choice, computerEmoji)
        
    }

   

    const rules = (playerChoice, compChoice) => {
            if(playerChoice === compChoice){
                setResultMessage("It's a Tie")
            }
            else if (playerChoice == "🪨" && compChoice == "✂️"){
                setResultMessage(winResult)
                setPlayerScore(playerScore + 1)
            }
            else if(playerChoice == "📄" && compChoice == "🪨"){
                setResultMessage(winResult)
                setPlayerScore(playerScore + 1)
            }
            else if(playerChoice == "✂️" && compChoice == "📄"){
                setResultMessage(winResult)
                setPlayerScore(playerScore + 1)
            }
            else{
                setResultMessage(loseResult)
                setComputerScore(computerScore + 1)
            }
    }

     const reset = () => {
            setPlayerScore(0)
            setComputerScore(0)
            setResultMessage('')
            setPlayerChoice(null)
            setComputerChoice(null)
     }


  


  return (
    <div className='bg-gray-800 min-h-screen text-white flex flex-col items-center'>

      <h1 className='text-4xl font-bold mt-8 mb-4 font-sans '>Rock Paper Scissors</h1>

      {/* Scoreboard */}
      <div className='border-4 border-gray-400 rounded-lg p-4 w-full max-w-md'>
        {/* scores */}
            <div className='flex justify-between items-center'>
                  {/* Player Score */}
                    <div className='text-2xl font-bold'>
                        <p>Player</p>
                        <p className='text-5xl'>{playerScore}</p>
                    </div>

                  {/* semi-colon */}
                    <div className='text-5xl font-bold text-gray-500'>
                      :
                    </div>

                  {/* Computer Score */}
                    <div className='text-2xl font-bold text-right'>
                        <p>Computer</p>
                        <p className='text-5xl'>{computerScore}</p>
                    </div>
            </div>
      </div>


      {/* Player buttons */}
      <div className='mt-8 flex gap-9'>
            <button className='bg-blue-400 hover:bg-blue-600 active:scale-95 text-white font-bold text-2xl w-32 h-32 rounded-lg transition duration-700' onClick={() => handlePlayerChoice("🪨")}>🪨</button>

            <button className='bg-green-400 hover:bg-green-600 active:scale-95 text-white font-bold text-2xl w-32 h-32 rounded-lg transition duration-700' onClick={() => handlePlayerChoice("📄")}>📄</button>

            <button className='bg-red-400 hover:bg-red-600 active:scale-95 text-white font-bold text-2xl w-32 h-32 rounded-lg transition duration-700' onClick={() => handlePlayerChoice("✂️")}>✂️</button>
      </div>


      {/* Result */}
      <div className='mt-12 text-center'>
              <h2 className='text-4xl font-bold'>{resultMessage}</h2>
              <p className='mt-4 text-xl'>{computerChoice}</p>
      </div>

      {/* Reset Button */}
      <button className='mt-9 bg-green-500 hover:bg-green-800 rounded-lg p-9' onClick={reset}> Reset </button>

    </div>
  )
}

export default Game
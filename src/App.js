// Switch players
// Check for winner
// Check for tie
// Notification to show winner - React hot toast

import React, { useState, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import Square from './Components/Square';
import { WinningCombination } from './Components/WinningCombination';
// import toast, { Toaster } from 'react-hot-toast';


function App() {

  let states = ["", "", "", "", "", "", "", "", ""]
  
  const [player, setPlayer] = useState(states)
  const [playerTurn, setPlayerTurn] = useState("O")
  const [results, setResults] = useState({winner: 'none', message: "none"})

  const handlePlayerTurn = (square) => {
    setPlayer(
      player.map((currentState, index) =>
      {
        if (index === square && currentState === "") {
          return playerTurn
        }
        return currentState
      }
      )
      )
    }
    
    const checkWinner = () => {
      WinningCombination.forEach(winningCombination => {
        const winner = player[winningCombination[0]]
        if (winner === "") return;
        let winnerFound = true;
      winningCombination.forEach(winningIndex => {
        if (player[winningIndex] !== winner) {
          winnerFound = false
        }
      })
      
      if (winnerFound) {
        setResults({winner: playerTurn, message: "You won"})
      }
    })
  }
  
  useEffect(() => {
    checkWinner()
    // setPlayer(states)
    playerTurn === "X" ? setPlayerTurn("O") : setPlayerTurn("X")
  }, [player])
  
  useEffect(() => {
    if (results.message !== 'none') {
      alert(`${results.winner} won`)
      window.location.reload()
      // <Toaster/>
      // toast.success(`${results.winner} won`)
    }
  }, [results])

  return (
    <Paper className="App" elevation={24}>
      <Square player={player[0]} handlePlayerTurn={()=>handlePlayerTurn(0)}/>
      <Square player={player[1]} handlePlayerTurn={()=>handlePlayerTurn(1)}/>
      <Square player={player[2]} handlePlayerTurn={()=>handlePlayerTurn(2) }/>
      <Square player={player[3]} handlePlayerTurn={()=>handlePlayerTurn(3) }/>
      <Square player={player[4]} handlePlayerTurn={()=>handlePlayerTurn(4) }/>
      <Square player={player[5]} handlePlayerTurn={()=>handlePlayerTurn(5) }/>
      <Square player={player[6]} handlePlayerTurn={()=>handlePlayerTurn(6) }/>
      <Square player={player[7]} handlePlayerTurn={()=>handlePlayerTurn(7) }/>
      <Square player={player[8]} handlePlayerTurn={()=>handlePlayerTurn(8) }/>
    </Paper>
  );
}

export default App;

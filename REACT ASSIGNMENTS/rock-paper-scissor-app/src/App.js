import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const[userChoice,setUserChoice] = useState('rock')
  const[computerChoice,setComputerChoice] = useState('rock')
  const[userPoints,setUserPoints] = useState(0)
  const[computerPoints,setcomputerPoints] = useState(0)
  const[turnResult,setTurnResult] = useState(null)
  const[result,setResult] = useState('Let\'s see who wins')
  const[gameOver,setGameOver] = useState(false)

  const choices = ['rock','paper','scissors']
  const handleOnClick = (choice) => {
    setUserChoice(choice)
    generateComputerChoice()
  }
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  } 
  const reset = () => {
    window.location.reload()
  }
  useEffect(()=>{
   const comboMoves = userChoice + computerChoice
   if(userPoints <= 4 && computerPoints <=4 ){
     if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves ==='scissorspaper'){
       const updatedUserPoints = userPoints + 1
       setUserPoints(updatedUserPoints)
       setTurnResult('User Got The Point')
       if(updatedUserPoints === 5){
        setGameOver(true)
        setResult('Congratulations User Won')
       }
     }
     if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves ==='rockpaper'){
      const updatedCompuerPoints = computerPoints + 1
      setcomputerPoints(updatedCompuerPoints)
      setTurnResult('Computer Got The Point')
      if(updatedCompuerPoints === 5){
        setGameOver(true)
        setResult('Congratulations Computer Won')
      }
     }
     if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves ==='scissorsscissors'){
      setTurnResult('No One Got the Point')
     }
   }
  },[userChoice,computerChoice])
  return (
    <div className="App">
      <h1 className='heading'>ROCK PAPER SCISSOR GAME</h1>
      <div className='score'>
        <h1>User Points : {userPoints}</h1>
        <h1>Computer Points : {computerPoints}</h1>
      </div>
      <div className='choices'>
          <div className='choice-user'>
            <img className='user-hand' src={`../images/${userChoice}.png`} alt="img1" ></img>
          </div>
          <div className='choice-computer'>
            <img className='computer-hand' src={`../images/${computerChoice}.png`} alt="img1" ></img>
          </div>
      </div>
      <div className='button-div'>
        {choices.map((choice,index) =>
          <button className='button' key={index} onClick={()=> handleOnClick(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>
      <div className='result'>
        <h1>Turn Result : {turnResult}</h1>
        <h1>Final Result : {result}</h1>
      </div>
      <div className='button-div'>
        {gameOver && 
         <button className='button' onClick={()=> reset()}>Restart Game ?</button> }
      </div>
    </div>
  );
}

export default App;

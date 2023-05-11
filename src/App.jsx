import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      let intervalId;
      if(isRunning) intervalId = setInterval(() => setTime((prevState) => prevState + 1), 10)
       return () => {
        clearInterval(intervalId)
       }
  }, [time, isRunning])

  // Hours
  const hours = Math.floor(time / 360000);
  
  // Minutes
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds
  const milliseconds = time % 100;


  const clickHandlerStart = () => {
    setIsRunning(!isRunning)
  }
  
  const clickHandlerReset = () => {
    setTime(0)
  }

  return (
    <div className={`${isRunning ? "App":"App-test"}`}>
      <div className='timer'>
          <span className='hour'>0{hours}</span>
          :<span className='minutes'>{minutes.toString().padStart(2, "0")}</span>
          :<span className='seconds'>{seconds.toString().padStart(2, "0")}</span>
          .<span className='milliseconds'>{milliseconds.toString().padStart(2, "0")}</span>
      </div>
      <div className='buttons'>
        <button onClick={clickHandlerStart}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={clickHandlerReset}>Reset</button>
      </div>
    </div>
  )
}

export default App

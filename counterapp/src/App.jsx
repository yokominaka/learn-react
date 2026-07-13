import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue=()=>{
    setCounter((currentCounter)=>currentCounter+1)
  }
  const removeVal =()=>{
    setCounter((currentCounter)=>{
      if (currentCounter<=0) return 0
      return currentCounter -1
    })
  }

  const resetValue=() =>{
    setCounter(0)
  }

  const counterMessage =counter ===0?'Counter is at zero':'Keep going'

  return (
    <main className="counter-app">
      <div className="counter-card">
        <p className="eyebrow">Basic React Counter</p>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <p className="status">{counterMessage}</p>

        <div className="button-row">
          <button onClick={addValue}>Add value</button>
          <button onClick={removeVal} disabled={counter === 0}>
            Remove value
          </button>
        </div>

        <button className="reset-button" onClick={resetValue}>
          Reset
        </button>
      </div>
    </main>
  )
}

export default App

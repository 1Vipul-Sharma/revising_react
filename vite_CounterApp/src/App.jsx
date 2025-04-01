import { useState } from 'react'
// import reactLogo from './assets/react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is {count}
        </button>
        <br />
        <button onClick={() => {if(count<20) setCount(count+1) }}>Increment</button>
        <button onClick={() => {if(count>0) setCount(count-1)}}>Decrement</button>
        <button onClick={() => setCount(0)}> Reset </button>
      </div>
    </>
  )
}

export default App

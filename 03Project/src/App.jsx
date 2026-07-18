import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "hamza",
    age: 19,
    city: "Lahore"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card username="hamza" text="visit me" />
    <Card username="hassan" text="about me" />
    </>
  )
}

export default App

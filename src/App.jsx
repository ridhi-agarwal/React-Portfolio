import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div >
        <NavBar></NavBar>
        <Hero id = "Hero"></Hero>
      </div>
  )
}

export default App

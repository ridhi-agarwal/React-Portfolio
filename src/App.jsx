import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import InfiniteScroll from './components/InfiniteScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div >
        <NavBar></NavBar>
        <Hero id = "Hero"></Hero>
        <InfiniteScroll></InfiniteScroll>
        <Hero id = "Hero"></Hero>

      </div>
  )
}

export default App

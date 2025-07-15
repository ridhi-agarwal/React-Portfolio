import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div class = "bg-gray-900" >
        <NavBar></NavBar>
       <div>hello</div>
       <div>hello</div>
       <div>hello</div>
      </div>
  )
}

export default App

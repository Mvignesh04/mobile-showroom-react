import { useState } from 'react'

import './App.css'
import Home from './Home/Home'
import Master from './Home/Master'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Master></Master>
    </>
  )
}

export default App

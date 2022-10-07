import { useState } from 'react'
import Main from './Components/Main'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
       <Header />
       <Main />
     </div>
  )
}

export default App

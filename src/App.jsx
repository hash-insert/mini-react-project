import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header,{name} from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
console.log(name)
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer city='MUMBAI'/>
    </div>
  )
}

export default App

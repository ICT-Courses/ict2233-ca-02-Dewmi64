import { useState } from 'react'
import './App.css'
import './styles/main.scss';
import Header from './componets/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div> <Header />
    <div>My Portfolio</div>
    </div>
      
  )
}

export default App

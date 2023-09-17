import { useState } from 'react'
import CreatePost from './components/CreatePost'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreatePost/>
       
      </div>
  
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)


  const handleClick = () => {
    console.log('clicked')
    setCount((count) => count + 1)
  }
  
  return (
    <>
      <div className='flex'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <Title title={'React App'} description={"This is a simple React App."} />
      <div className="">
        <button className='my-2' onClick={handleClick}>
          count is {count}
        </button>
        <p className='my-2'>
          Edit <code>src/App.jsx</code> and save to see your changes
        </p>
      </div>
    </>
  )
}

export default App

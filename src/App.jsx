import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topp from './Topp'
import Gridd from './Gridd'
import Bottom from './Bottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div id='home'>
          <Topp />
        </div>
        <div className='banners'>
          <img src="../src/assets/banner.png" alt='banner' />
        </div>
        <div>
          <Gridd />
        </div>
        
        <div>
          <Bottom />
        </div>
      </div>
      
    </>
  )
}

export default App

import React from 'react'
import './index.css'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'
const home = () => {
  return (
    <main className='app transition-allease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default home
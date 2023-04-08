// import { useState, createContext } from 'react'
import { ThemeProvider, ThemeContext } from './components/UI/ThemeToggle/context/ThemeContext'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useContext } from 'react'
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <ThemeProvider>
          <div className='bg-skin-fill'>
            <div className='container text-skin-base'>
              <Navbar />    
              <Hero />
            </div>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App

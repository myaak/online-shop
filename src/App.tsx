import React from 'react';
import { AppRouter, Navbar, Slider } from './components'
import { BrowserRouter } from 'react-router-dom'
import './styles.scss'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <AppRouter />
      </header>
      <main>
        <div className="content">
          <Slider />
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App

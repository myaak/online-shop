import React from 'react';
import { AppRouter, Navbar } from './components'
import { BrowserRouter } from 'react-router-dom'
import './styles.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App

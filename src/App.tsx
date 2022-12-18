import React from 'react';
import { AppRouter, Navbar, Slider } from './components'
import { BrowserRouter } from 'react-router-dom'
import { useColorModeValue, ThemeProvider } from '@chakra-ui/react'
import {theme} from './utils/theme'
import './styles.scss'

function App() {


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <header>
        <Navbar />
        <AppRouter />
      </header>
      <main>
        <div className="content" style={{
            backgroundColor: useColorModeValue("#fff", "#202124")
          }}>
          <Slider />
        </div>
      </main>
    </BrowserRouter>
</ThemeProvider>
  )
}

export default App

import React from 'react'
import './App.css'
import routes from './pages/index'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}/>
    </ThemeProvider>
  )
}

export default App
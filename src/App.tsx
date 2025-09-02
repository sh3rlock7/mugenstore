import './App.css'
import { ThemeProvider } from '@emotion/react'
import { createAppTheme } from './theme/theme'
import { CssBaseline } from '@mui/material'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'

function App() {

  const theme = createAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

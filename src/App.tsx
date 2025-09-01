import { useMemo, useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { createAppTheme } from './theme/theme'
import { CssBaseline } from '@mui/material'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = useMemo( () => createAppTheme(mode), [mode]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

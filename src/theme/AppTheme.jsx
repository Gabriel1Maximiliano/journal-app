import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpleTheme } from './purpuple'

export const AppTheme = ({children}) => {
  return (
    <React.StrictMode>
    <ThemeProvider theme={purpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
           {children}
    </ThemeProvider>
    
  </React.StrictMode>
  )
}

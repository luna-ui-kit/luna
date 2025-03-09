'use client'
import { ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { themeOptions } from './ThemeOptions'
import { StyleOverrides } from './styleOverrides'

interface Props {
  children: ReactNode
}

export function ThemeComponent(props: Props) {
  const { children } = props
  const theme = createTheme({
    ...themeOptions
  })

  return (
    <ThemeProvider theme={{ ...theme, ...StyleOverrides }}>
      {children}
    </ThemeProvider>
  )
}

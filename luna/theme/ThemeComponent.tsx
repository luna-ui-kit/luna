'use client'
import { ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { themeOptions } from './ThemeOptions'
import { Shadows } from './shadows'

interface Props {
  children: ReactNode
}

export function ThemeComponent(props: Props) {
  const { children } = props
  const theme = createTheme({
    ...themeOptions
  })

  return (
    <ThemeProvider theme={{ ...theme, ...Shadows }}>{children}</ThemeProvider>
  )
}

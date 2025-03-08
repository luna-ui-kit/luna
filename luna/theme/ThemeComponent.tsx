'use client'
import { ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import themeOptions from './ThemeOptions'
import Overrides from './overrides'

interface Props {
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  const { children } = props
  const theme = createTheme({ ...themeOptions })

  return (
    <ThemeProvider theme={{ ...theme, ...Overrides }}>{children}</ThemeProvider>
  )
}

export default ThemeComponent

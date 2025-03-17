import { grey } from '@mui/material/colors'
import { Typography } from './typography'
import { lunaPurple, lunaRed } from './colors'

export const themeOptions = {
  palette: {
    primary: {
      main: lunaPurple[500],
      light: lunaPurple[300],
      dark: lunaPurple[700],
      contrastText: '#fff'
    },
    secondary: {
      main: lunaRed[500],
      light: lunaRed[300],
      dark: lunaRed[700],
      contrastText: '#fff'
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[500]
    },
    divider: grey[200],
    background: {
      default: grey[50],
      paper: '#fff'
    }
  },
  ...Typography
}

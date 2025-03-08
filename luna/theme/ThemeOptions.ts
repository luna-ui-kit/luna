import { deepOrange, grey, indigo } from '@mui/material/colors'
import shadows from './shadows'
import Typography from './typography'

const themeOptions = {
  palette: {
    primary: indigo,
    secondary: deepOrange,
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400]
    },
    divider: grey[200],
    background: {
      paper: grey[50],
      default: '#fff'
    },
    shadows: shadows()
  },
  ...Typography
}

export default themeOptions

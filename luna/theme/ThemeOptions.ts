import { deepOrange, grey, indigo } from '@mui/material/colors'
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
      default: grey[50],
      paper: '#fff'
    }
  },
  ...Typography
}

export default themeOptions

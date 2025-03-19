import { grey } from '@mui/material/colors'
import { Shadows } from '../shadows'

export const StyleOverrides = {
  ...Shadows,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.MuiInputLabel-shrink': {
            top: '0'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: grey[200],
          borderRadius: '12px'
        }
      }
    }
  }
}

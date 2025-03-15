import { grey } from '@mui/material/colors'
import { Shadows } from '../shadows'

export const StyleOverrides = {
  ...Shadows,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiBox: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
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
          borderRadius: 0
        }
      }
    }
  }
}

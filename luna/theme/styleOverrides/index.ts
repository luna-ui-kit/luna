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
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.MuiInputLabel-shrink': {
            top: '0'
          }
        }
      }
    }
  }
}

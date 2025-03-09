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
    }
  }
}

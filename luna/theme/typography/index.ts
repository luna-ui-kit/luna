import { unstable_createBreakpoints } from '@mui/material'
import { grey } from '@mui/material/colors'

const breakpoints = unstable_createBreakpoints({})

export const Typography = {
  typography: {
    fontFamily: "Quicksand, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    displayLarge: {
      fontSize: '64px',
      color: grey[900],
      fontWeight: 700,
      [breakpoints.down('md')]: {
        fontSize: '56px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '48px'
      }
    },
    displayMedium: {
      fontSize: '56px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '48px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '40px'
      }
    },
    displaySmall: {
      fontSize: '48px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '40px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '32px'
      }
    },
    headlineLarge: {
      fontSize: '40px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '32px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '24px'
      }
    },
    headlineMedium: {
      fontSize: '32px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '24px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '22px'
      }
    },
    headlineSmall: {
      fontSize: '24px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '22px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '22px'
      }
    },
    titleLarge: {
      fontSize: '18px',
      color: grey[900],
      fontWeight: 600
    },
    titleMedium: {
      fontSize: '18px',
      color: grey[900],
      fontWeight: 600
    },
    titleSmall: {
      fontSize: '16px',
      color: grey[900],
      fontWeight: 600
    },
    bodyLarge: {
      fontSize: '18px',
      color: grey[800],
      fontWeight: 400
    },
    bodyMedium: {
      fontSize: '16px',
      color: grey[800],
      fontWeight: 400
    },
    bodySmall: {
      fontSize: '14px',
      color: grey[800],
      fontWeight: 400
    },
    bodyExtraSmall: {
      fontSize: '12px',
      color: grey[800],
      fontWeight: 400
    },
    labelExtraLarge: {
      fontSize: '18px',
      color: grey[800],
      fontWeight: 500
    },
    labelLarge: {
      fontSize: '16px',
      color: grey[800],
      fontWeight: 500
    },
    labelMedium: {
      fontSize: '14px',
      color: grey[800],
      fontWeight: 500
    },
    labelSmall: {
      fontSize: '12px',
      color: grey[800],
      fontWeight: 500
    },
    labelExtraSmall: {
      fontSize: '10px',
      color: grey[800],
      fontWeight: 500
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          displayLarge: 'h1',
          displayMedium: 'h2',
          displaySmall: 'h3',
          headlineLarge: 'h4',
          headlineMedium: 'h5',
          headlineSmall: 'h6',
          titleLarge: 'h6',
          titleMedium: 'h6',
          titleSmall: 'h6',
          bodyLarge: 'p',
          bodyMedium: 'p',
          bodySmall: 'p',
          bodyExtraSmall: 'p'
        }
      }
    }
  }
}

import { unstable_createBreakpoints } from '@mui/material'
import { grey } from '@mui/material/colors'

const breakpoints = unstable_createBreakpoints({})

export const Typography = {
  typography: {
    fontFamily: "Poppins, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    displayLarge: {
      fontSize: '64px',
      lineHeight: '86px',
      color: grey[900],
      fontWeight: 700,
      [breakpoints.down('md')]: {
        fontSize: '56px',
        lineHeight: '68px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '48px',
        lineHeight: '56px'
      }
    },
    displayMedium: {
      fontSize: '56px',
      lineHeight: '68px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '48px',
        lineHeight: '56px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '40px',
        lineHeight: '52px'
      }
    },
    displaySmall: {
      fontSize: '48px',
      lineHeight: '56px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '40px',
        lineHeight: '52px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '32px',
        lineHeight: '40px'
      }
    },
    headlineLarge: {
      fontSize: '40px',
      lineHeight: '52px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '32px',
        lineHeight: '40px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '24px',
        lineHeight: '30px'
      }
    },
    headlineMedium: {
      fontSize: '32px',
      lineHeight: '40px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '30px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '22px',
        lineHeight: '26px'
      }
    },
    headlineSmall: {
      fontSize: '24px',
      lineHeight: '30px',
      color: grey[900],
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '22px',
        lineHeight: '26px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '22px',
        lineHeight: '26px'
      }
    },
    titleLarge: {
      fontSize: '18px',
      lineHeight: '24px',
      color: grey[900],
      fontWeight: 600
    },
    titleMedium: {
      fontSize: '18px',
      lineHeight: '24px',
      color: grey[900],
      fontWeight: 600
    },
    titleSmall: {
      fontSize: '16px',
      lineHeight: '22px',
      color: grey[900],
      fontWeight: 600
    },
    bodyLarge: {
      fontSize: '18px',
      lineHeight: '24px',
      color: grey[800],
      fontWeight: 400
    },
    bodyMedium: {
      fontSize: '16px',
      lineHeight: '22px',
      color: grey[800],
      fontWeight: 400
    },
    bodySmall: {
      fontSize: '14px',
      lineHeight: '20px',
      color: grey[800],
      fontWeight: 400
    },
    bodyExtraSmall: {
      fontSize: '12px',
      lineHeight: '18px',
      color: grey[800],
      fontWeight: 400
    },
    labelExtraLarge: {
      fontSize: '18px',
      lineHeight: '24px',
      color: grey[800],
      fontWeight: 500
    },
    labelLarge: {
      fontSize: '16px',
      lineHeight: '22px',
      color: grey[800],
      fontWeight: 500
    },
    labelMedium: {
      fontSize: '14px',
      lineHeight: '20px',
      color: grey[800],
      fontWeight: 500
    },
    labelSmall: {
      fontSize: '12px',
      lineHeight: '18px',
      color: grey[800],
      fontWeight: 500
    },
    labelExtraSmall: {
      fontSize: '10px',
      lineHeight: '16px',
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

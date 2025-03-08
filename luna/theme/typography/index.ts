import { grey } from '@mui/material/colors'

const Typography = {
  typography: {
    displayLarge: {
      fontSize: '64px',
      color: grey[900],
      fontWeight: 700,
      lineHeight: '86px'
    },
    displayMedium: {
      fontSize: '56px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '68px'
    },
    displaySmall: {
      fontSize: '48px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '56px'
    },
    headlineLarge: {
      fontSize: '40px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '52px'
    },
    headlineMedium: {
      fontSize: '32px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '40px'
    },
    headlineSmall: {
      fontSize: '24px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '30px'
    },
    titleLarge: {
      fontSize: '22px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '26px'
    },
    titleMedium: {
      fontSize: '18px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '24px'
    },
    titleSmall: {
      fontSize: '16px',
      color: grey[900],
      fontWeight: 600,
      lineHeight: '22px'
    },
    bodyLarge: {
      fontSize: '18px',
      color: grey[800],
      fontWeight: 400,
      lineHeight: '24px'
    },
    bodyMedium: {
      fontSize: '16px',
      color: grey[800],
      fontWeight: 400,
      lineHeight: '22px'
    },
    bodySmall: {
      fontSize: '14px',
      color: grey[800],
      fontWeight: 400,
      lineHeight: '20px'
    },
    bodyExtraSmall: {
      fontSize: '12px',
      color: grey[800],
      fontWeight: 400,
      lineHeight: '18px'
    },
    labelExtraLarge: {
      fontSize: '18px',
      color: grey[800],
      fontWeight: 500,
      lineHeight: '24px'
    },
    labelLarge: {
      fontSize: '16px',
      color: grey[800],
      fontWeight: 500,
      lineHeight: '22px'
    },
    labelMedium: {
      fontSize: '14px',
      color: grey[800],
      fontWeight: 500,
      lineHeight: '20px'
    },
    labelSmall: {
      fontSize: '12px',
      color: grey[800],
      fontWeight: 500,
      lineHeight: '18px'
    },
    labelExtraSmall: {
      fontSize: '10px',
      color: grey[800],
      fontWeight: 500,
      lineHeight: '16px'
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

export default Typography

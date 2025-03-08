/* eslint-disable @typescript-eslint/no-unused-vars */
import { TypographyPropsVariantOverrides } from '@mui/material/Typography'
import {
  TypographyVariants,
  TypographyVariantsOptions
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties
    displayMedium: React.CSSProperties
    displaySmall: React.CSSProperties

    headlineLarge: React.CSSProperties
    headlineMedium: React.CSSProperties
    headlineSmall: React.CSSProperties

    titleLarge: React.CSSProperties
    titleMedium: React.CSSProperties
    titleSmall: React.CSSProperties

    bodyLarge: React.CSSProperties
    bodyMedium: React.CSSProperties
    bodySmall: React.CSSProperties
    bodyExtraSmall: React.CSSProperties

    labelExtraLarge: React.CSSProperties
    labelLarge: React.CSSProperties
    labelMedium: React.CSSProperties
    labelSmall: React.CSSProperties
    labelExtraSmall: React.CSSProperties
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties

    headlineLarge?: React.CSSProperties
    headlineMedium?: React.CSSProperties
    headlineSmall?: React.CSSProperties

    titleLarge: React.CSSProperties
    titleMedium: React.CSSProperties
    titleSmall: React.CSSProperties

    bodyLarge: React.CSSProperties
    bodyMedium: React.CSSProperties
    bodySmall: React.CSSProperties
    bodyExtraSmall: React.CSSProperties

    labelExtraLarge: React.CSSProperties
    labelLarge: React.CSSProperties
    labelMedium: React.CSSProperties
    labelSmall: React.CSSProperties
    labelExtraSmall: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true
    displayMedium: true
    displaySmall: true

    headlineLarge: true
    headlineMedium: true
    headlineSmall: true

    titleLarge: true
    titleMedium: true
    titleSmall: true

    bodyLarge: true
    bodyMedium: true
    bodySmall: true
    bodyExtraSmall: true

    labelExtraLarge: true
    labelLarge: true
    labelMedium: true
    labelSmall: true
    labelExtraSmall: true
  }
}

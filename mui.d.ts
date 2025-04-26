/* eslint-disable @typescript-eslint/no-unused-vars */
import { TypographyPropsVariantOverrides } from '@mui/material/Typography'
import { ButtonPropsVariantOverrides } from '@mui/material/Button'
import { ChipPropsColorOverrides } from '@mui/material/Chip'
import {
  TypographyVariants,
  TypographyVariantsOptions,
  ButtonVariants,
  ButtonVariantsOptions
} from '@mui/material/styles'

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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true
    link: true
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    grey: true
    green: true
    lunaRed: true
    yellow: true
    blue: true
    pink: true
    lunaPurple: true
    lime: true
    teal: true
    brown: true
  }
}

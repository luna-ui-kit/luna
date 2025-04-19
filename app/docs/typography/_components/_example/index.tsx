'use client'
import { Box, Typography, useTheme } from '@mui/material'

export const Example = () => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='24px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Typography variant='displayLarge'>displayLarge</Typography>
      <Typography variant='displayMedium'>displayMedium</Typography>
      <Typography variant='displaySmall'>displaySmall</Typography>
      <Typography variant='headlineLarge'>headlineLarge</Typography>
      <Typography variant='headlineMedium'>headlineMedium</Typography>
      <Typography variant='headlineSmall'>headlineSmall</Typography>
      <Typography variant='titleLarge'>titleLarge</Typography>
      <Typography variant='titleMedium'>titleMedium</Typography>
      <Typography variant='titleSmall'>titleSmall</Typography>
      <Typography variant='bodyLarge'>bodyLarge</Typography>
      <Typography variant='bodyMedium'>bodyMedium</Typography>
      <Typography variant='bodySmall'>bodySmall</Typography>
      <Typography variant='bodyExtraSmall'>bodyExtraSmall</Typography>
      <Typography variant='labelExtraLarge'>labelExtraLarge</Typography>
      <Typography variant='labelLarge'>labelLarge</Typography>
      <Typography variant='labelMedium'>labelMedium</Typography>
      <Typography variant='labelSmall'>labelSmall</Typography>
      <Typography variant='labelExtraSmall'>labelExtraSmall</Typography>
    </Box>
  )
}

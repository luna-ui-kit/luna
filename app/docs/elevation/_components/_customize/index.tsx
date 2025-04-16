'use client'
import { Box, Typography, useTheme } from '@mui/material'

export const Customize = () => {
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
      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>How To Customize</Typography>

        <Typography variant='bodyMedium'>
          For customization, just head to the files in the paths below. If you
          need more details, the MUI docs have you covered.
        </Typography>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        gap='16px'
        padding='16px'
        borderRadius='12px'
        sx={{ background: theme.palette.grey[200] }}
      >
        <Typography variant='bodySmall'>@/luna/theme/shadows</Typography>
      </Box>
    </Box>
  )
}

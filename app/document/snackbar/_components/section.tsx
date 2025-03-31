'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { FirstSnackbar } from './firstSnackbar'
import FirstSnackbarCode from './firstSnackbarCode'
import { SecondSnackbar } from './secondSnackbar'
import SecondSnackbarCode from './secondSnackbarCode'

export const SnackbarSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        gap: '24px',
        padding: '24px',
        border: `1px solid ${theme.palette.grey[300]}`,
        background: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Snackbar</Typography>

        <Box
          sx={{ display: 'flex', gap: '16px', mt: '16px', flexWrap: 'wrap' }}
        >
          <FirstSnackbar />
          <SecondSnackbar />
        </Box>

        <FirstSnackbarCode />
        <SecondSnackbarCode />
      </Box>
    </Box>
  )
}

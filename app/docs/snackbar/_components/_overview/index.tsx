'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { FirstSnackbar } from '../_snackbars/firstSnackbar'
import { SecondSnackbar } from '../_snackbars/secondSnackbar'
import { ThirdSnackbar } from '../_snackbars/thirdSnackbar'

export const Overview = () => {
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
        <Typography variant='titleMedium'>Snackbar</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <FirstSnackbar />
        <SecondSnackbar />
        <ThirdSnackbar />
      </Box>
    </Box>
  )
}

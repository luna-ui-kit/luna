'use client'
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
  useTheme
} from '@mui/material'

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
        <Typography variant='titleMedium'>Progress</Typography>
      </Box>

      <Box display='flex' flexDirection='column' gap='24px'>
        <CircularProgress size={32} variant='determinate' value={75} />

        <LinearProgress
          variant='determinate'
          value={75}
          sx={{ borderRadius: '4px' }}
        />
      </Box>
    </Box>
  )
}

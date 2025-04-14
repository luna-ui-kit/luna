'use client'
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
  useTheme
} from '@mui/material'
import ProgressCode from './code'

export const ProgressSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='RadioGroup'
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
        <Typography variant='titleSmall'>Progress</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: '16px',
            gap: '16px'
          }}
        >
          <CircularProgress size={32} variant='determinate' value={75} />

          <LinearProgress
            variant='determinate'
            value={75}
            sx={{ borderRadius: '4px' }}
          />
        </Box>

        <ProgressCode />
      </Box>
    </Box>
  )
}

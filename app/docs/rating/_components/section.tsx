'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Rating } from '@/luna/components'
import RatingCode from './code'

export const RatingSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
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
        <Typography variant='titleSmall'>Rating</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <Rating defaultValue={2} />
        </Box>

        <RatingCode />
      </Box>
    </Box>
  )
}
